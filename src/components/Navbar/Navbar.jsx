import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={logo} alt="Logo" />
      </motion.div>

      {/* Hamburger Menu */}
      <motion.div
        className="menu-toggle"
        onClick={toggleMenu}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 250 }}
      >
        &#9776; {/* This is the hamburger icon */}
      </motion.div>

      <div className="others">
        <motion.ul
          className="navbar-links"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {['Home', 'About', 'Portfolio', 'Product', 'Contact'].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              transition={{ type: 'spring', stiffness: 150, damping: 10 }}
            >
              <a href={`/${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1, color: '#f39c12' }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            <a href="tel:+917028828831" className="call-now">
              Call Now →
            </a>
          </motion.li>
        </motion.ul>
      </div>

      {/* Side Menu */}
      <motion.div
        className={`side-menu ${menuOpen ? 'open' : ''}`}
        initial={{ x: 250 }} // Start off-screen to the right
        animate={{ x: menuOpen ? 0 : 250 }} // Slide in/out based on `menuOpen`
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Close Button */}
        <div className="close-icon" onClick={toggleMenu}>
          &#10006;  
        </div>
        <ul>
          {['Home', 'About', 'Portfolio', 'Product', 'Contact'].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 10 }}
            >
              <a href={`/${link.toLowerCase()}`} onClick={toggleMenu}>
                {link}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            <a href="tel:+917028828831" className="call-now" onClick={toggleMenu}>
              Call Now →
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
