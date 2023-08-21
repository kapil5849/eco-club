import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">
                        <span className="logo-text">Eco Club</span>
                        <span className="logo-text rtu-text">RTU</span>
                        <span className="logo-text kota-text">Kota</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
