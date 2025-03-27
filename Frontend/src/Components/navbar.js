import React, { useState, useEffect } from 'react';
import '../style/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scroll-navbar' : ''}`}>
            <div className="navbar-content">
                <div className="logo">
                    𝒌𝒉𝒖𝒔𝒉𝒂𝒍 𝒑𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐
                </div>

                <button
                    className="menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>
                        Home
                    </a>
                    <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                        About
                    </a>
                    <a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>
                        Experience
                    </a>
                    <a href="#education" className="nav-link" onClick={() => scrollToSection('education')}>
                        Education
                    </a>
                    <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;