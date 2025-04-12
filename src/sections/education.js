import React from 'react';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../style/education.css';

const Education = () => {
    const educationData = [
        {
            level: "Bachelor of Computer Application",
            field: "Computer Application",
            institution: "Silver Oak College of Engineering and Technology",
            location: "Ahmedabad, Gujarat",
            duration: "2021 - 2025",
            score: "CPI: 8.42",
            status: "Currently Pursuing",
            semester: "6th Semester"
        },
        {
            level: "Higher Secondary (12th)",
            field: "Commerce",
            institution: "Swami Vivekanand School",
            location: "derdi kumbhaji, Gujarat",
            duration: "2020 - 2021",
            score: "72%",
            board: "GSEB Board",
            stream: "Science"
        },
        {
            level: "Secondary School (10th)",
            field: "General",
            institution: "Swami Vivekanand School",
            location: "derdi kumbhaji, Gujarat",
            duration: "2018 - 2019",
            score: "71%",
            board: "GSEB Board"
        }
    ];

    return (
        <section className="education-section" id="education">
            <div className="education-container">
                <h2 className="section-title">
                    <FaGraduationCap className="title-icon" />
                    Education
                </h2>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <div className="education-header">
                                <h3 className="education-level">{edu.level}</h3>
                                <div className="education-badges">
                                    <span className="badge primary">{edu.field}</span>
                                    {edu.stream && <span className="badge secondary">{edu.stream}</span>}
                                    {edu.semester && <span className="badge secondary">{edu.semester}</span>}
                                    {edu.status && <span className="badge highlight">{edu.status}</span>}
                                </div>
                            </div>

                            <div className="institution-details">
                                <h4 className="institution-name">
                                    <FaSchool className="icon" />
                                    {edu.institution}
                                </h4>

                                <div className="details-row">
                                    <p className="location">
                                        <FaMapMarkerAlt className="icon" />
                                        {edu.location}
                                    </p>

                                    <p className="duration">
                                        <FaCalendarAlt className="icon" />
                                        {edu.duration}
                                    </p>
                                </div>
                            </div>

                            <div className="education-footer">
                                <div className="score-section">
                                    <span className="score-badge">{edu.score}</span>
                                </div>
                                <div className="board-info">
                                    {edu.board && <span className="board-badge">{edu.board}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
