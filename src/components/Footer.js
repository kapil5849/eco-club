import React from 'react';
import { FaTwitter, FaInstagram,FaWhatsapp } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-icons">
                <a href="https://chat.whatsapp.com/Fq2u5UxBW383jGNnU8GNY6" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/ecoclub_rtu" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/ecoclub_rtu" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="/" rel="noopener noreferrer"> 
                {/* // image add karna hai. */}
                    <IoMdPhotos />
                </a>
            </div>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Eco Club, RTU, Kota. All rights reserved.</p>
                <p>Contact us: info@ecoclub.com</p>
            </div>
        </footer>
    );
}

export default Footer;
