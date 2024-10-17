import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+917028828831';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main-navbar'>
      <div className="logo">
        <img src={logo} alt="5Techg" />
      </div>
      <div className="nav-content">
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/product">Product</a>
          <a href="/contact">Contact</a>
          <button className="call-now" onClick={handleCall}>Call Now →</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
