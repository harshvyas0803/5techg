import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}  
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}   
      >
        <img src={logo} alt="Logo" />
      </motion.div>

      <motion.div className="others">
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
                staggerChildren: 0.4,  /* Slower stagger effect */
              },
            },
          }}
        >
          {['Home', 'About', 'Portfolio', 'Product', 'Contact'].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#f39c12' }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}   
            >
              <a href={`/${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1, color: '#f39c12' }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}   
          >
            <a href="tel:+917028828831" className="call-now">
              Call Now →
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
