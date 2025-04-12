import React from "react";
import "../style/contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const contactInfo = {
  email: "khushallakhatariya@gmail.com",
  phone: "+91 6355083812",
  location: "Ahmedabad, Gujarat",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
    { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
  ],
};

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <FaEnvelope className="title-icon" />
          Get In Touch
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>{contactInfo.location}</span>
              </div>
              {/* 
              <div className="social-links">
                {contactInfo.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="contact-note">
          <p>
            If you're interested in working together or have any questions about
            my services, feel free to reach out via email. I'll get back to you
            as soon as possible to discuss how we can collaborate on your next
            project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
