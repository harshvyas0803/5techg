// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
        {/* Menu Links with Animation */}
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a href="/home" whileHover={{ scale: 1.1, color: "#000000" }}>Home</motion.a>
          <motion.a href="/about" whileHover={{ scale: 1.1, color: "#000000" }}>About</motion.a>
          <motion.a href="/portfolio" whileHover={{ scale: 1.1, color: "#000000" }}>Portfolio</motion.a>
          <motion.a href="/product" whileHover={{ scale: 1.1, color: "#000000" }}>Product</motion.a>
          <motion.a href="/contact" whileHover={{ scale: 1.1, color: "#000000" }}>Contact</motion.a>
          <motion.button
            className="call-now"
            onClick={handleCall}
            whileHover={{ scale: 1.1, backgroundColor: '#ff6347', color: '#fff' }}
          >
            Call Now →
          </motion.button>
        </div>

        {/* Hamburger Icon with Rotation Animation */}
        <motion.div
          className="hamburger"
          onClick={toggleMenu}
          whileTap={{ scale: 0.8 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaBars />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
