require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// ✅ CORS configuration
app.use(cors({ origin: '*' }));
app.use(express.json()); // ✅ Replaces body-parser (not needed in Express 4.16+)

// ✅ Check if environment variables are loaded
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ ERROR: Missing environment variables (EMAIL_USER, EMAIL_PASS)");
    process.exit(1); // Stop the server if ENV variables are missing
}

// ✅ Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ✅ Use App Password (not Gmail password)
    },
});

// ✅ Contact form API route
app.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // ✅ Validate request body
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER, // ✅ Use server email, not user email
            replyTo: email, // ✅ Allows replies to sender
            to: process.env.EMAIL_USER,
            subject: `New Contact Request: ${subject}`,
            text: `From: ${name} (${email})\n\n${message}`,
        };

        // ✅ Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Email sending error:", error);
        res.status(500).json({ error: "Failed to send email. Please try again later!" });
    }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
