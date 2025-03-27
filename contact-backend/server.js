require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Request: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
