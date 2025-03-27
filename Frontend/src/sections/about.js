import React from 'react';
import '../style/about.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    {/* Left Side - Introduction */}
                    <div className="about-intro">
                        <p className="intro-text">
                            I am a passionate MERN Stack Developer with a strong foundation in web development
                            and a keen eye for creating user-friendly applications.
                        </p>
                        <p className="intro-text">
                            Specialized in building full-stack web applications using MongoDB, Express.js,
                            React.js, and Node.js, with a focus on writing clean and maintainable code.
                        </p>
                        <p className="intro-text">
                            Currently seeking opportunities to contribute my skills to innovative projects
                            and collaborate with forward-thinking teams.
                        </p>
                    </div>
                    
                    {/* Right Side - Personal Info */}
                    <div className="personal-info">
                        <div className="info-grid">
                            <div className="info-item">
                                <span className="info-label">Name:</span>
                                <span className="info-value">Khushal Lakhtariya</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Age:</span>
                                <span className="info-value">20</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">From:</span>
                                <span className="info-value">India</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Email:</span>
                                <span className="info-value">
                                    <a href="mailto:khushallakhtariya@gmail.com">
                                        khushallakhtariya@gmail.com
                                    </a>
                                </span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Availability:</span>
                                <span className="info-value available">Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
