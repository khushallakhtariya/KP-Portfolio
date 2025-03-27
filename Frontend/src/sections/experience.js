import React from 'react';
import { FaBriefcase, FaCalendar, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import '../style/experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "React js Developer Intern",
            company: "infikey technologies pvt ltd",
            location: "Ahmedabad, Gujarat",
            locationUrl: "https://maps.app.goo.gl/3WRWpfww2f3mXkt79",
            duration: "3 Months",
            responsibilities: [
                "Developed dynamic user interfaces using React.js with hooks and implemented Redux for state management",
                "Built RESTful APIs using Node.js and Express.js, integrated MongoDB for database operations",
                "Created responsive layouts using Bootstrap and custom CSS for cross-browser compatibility",
                "Utilized Git for version control and collaborated with team using GitHub for code management"
            ],
            technologies: ["React.js", "MongoDB", "REST API", "Git", "Bootstrap"]
        },
        {
            title: "MERN Stack Developer Intern",
            company: "infikey technologies pvt ltd",
            location: "Ahmedabad, Gujarat",
            locationUrl: "https://maps.app.goo.gl/3WRWpfww2f3mXkt79",
            duration: "3 Months",
            responsibilities: [
                "Engineered Next.js applications with server-side rendering (SSR) for improved performance",
                "Designed modern UI components using Tailwind CSS with responsive and mobile-first approach",
                "Implemented Redux for complex state management and created custom middleware for API integration",
                "Developed Node.js backend services with Express.js, handling data validation and authentication"
            ],
            technologies: ["Next.js", "Tailwind CSS", "Nodejs", "Redux"]
        }   
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="section-title">
                    <FaBriefcase className="title-icon" />
                    My Experience
                </h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <div className="company-details">
                                        <span className="company-name">{exp.company}</span>
                                        <a
                                            href={exp.locationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="location-wrapper"
                                            title="View on Google Maps"
                                        >
                                            <FaMapMarkerAlt className="location-icon" />
                                            <span className="location-text">{exp.location}</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="experience-duration">
                                    <FaCalendar className="duration-icon" />
                                    {/* <span>{exp.date}</span> */}
                                    <span className="duration-badge">{exp.duration}</span>
                                </div>

                                <div className="responsibilities">
                                    <h4>Key Responsibilities:</h4>
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="technologies">
                                    <FaCode className="tech-icon" />
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
