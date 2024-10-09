import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>

      <div className="others">
        <ul className="navbar-links">
          {['Home', 'About', 'Portfolio', 'Product', 'Contact'].map((link, index) => (
            <li key={index}>
              <a href={`/${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+917028828831" className="call-now">
              Call Now →
            </a>
          </li>
        </ul>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <div className="close-icon" onClick={toggleMenu}>
          &#10006; {/* Unicode for "X" symbol */}
        </div>
        <ul>
          {['Home', 'About', 'Portfolio', 'Product', 'Contact'].map((link, index) => (
            <li key={index}>
              <a href={`/${link.toLowerCase()}`} onClick={toggleMenu}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+917028828831" className="call-now" onClick={toggleMenu}>
              Call Now →
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
