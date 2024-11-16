import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+917028828831';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={logo} alt="5Techg" />
      </div>
      <div className="nav-content">
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a href="/home" whileHover={{ scale: 1.1 }}>Home</motion.a>
          <motion.a href="/about" whileHover={{ scale: 1.1 }}>About</motion.a>
          <motion.a href="/portfolio" whileHover={{ scale: 1.1 }}>Portfolio</motion.a>
          <motion.a href="/product" whileHover={{ scale: 1.1 }}>Product</motion.a>
          <motion.a href="/contact" whileHover={{ scale: 1.1 }}>Contact</motion.a>
          <motion.button
            className="call-now"
            onClick={handleCall}
            whileHover={{ scale: 1.1, backgroundColor: '#ff6347', color: '#fff' }}
          >
            Call Now →
          </motion.button>
        </div>

        <div className="social-links">
          <motion.a
            href="https://www.instagram.com/5techg_/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://in.linkedin.com/company/5techg"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        <motion.div
          className="hamburger"
          onClick={toggleMenu}
          whileTap={{ scale: 0.8 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          // transition={{ type: "spring", stiffness: 300 }}
        >
          <FaBars />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
