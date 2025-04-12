import React from "react";
import "../style/home.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/images/profile.jpg"; // Add this at the top
import resume from "../assets/Khushal-Cv.pdf";
const Home = () => {
  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left side - Image */}
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img
              src={profileImage} // Replace with your image path
              alt="Profile"
              className="profile-image"
              loading="lazy"
              onLoad={(e) => (e.target.style.opacity = 1)}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="content-container">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Khushal</h1>
          <h2 className="title">MERN Stack Developer</h2>

          <p className="description">
            Passionate Full Stack Developer specializing in MERN Stack
            development. Creating robust web applications with modern
            technologies and clean code practices. Focused on building scalable
            and user-friendly solutions.
          </p>

          {/* Buttons */}
          <div className="button-group">
            <button className="primary-btn" onClick={handleResumeClick}>
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-links">
            <a
              href="https://github.com/khushallakhtariya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lakhtariya-khushal-2560142a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/ii._.khushal._.ii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
