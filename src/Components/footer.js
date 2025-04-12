import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../style/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="thank-you">
                    Thank you for visiting !
                </p>
                <p className="copyright">
                    © {currentYear} Made with <FaHeart className="heart-icon" /> by
                    <span className="name">Kʜᴜsʜᴀʟ 모 </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
