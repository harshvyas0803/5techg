import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Finework from '../../components/finework/Finework';
import Navbar from '../../components/Navbar/Navbar';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <div className='nav-in-portfolio'>
        <Navbar />
      </div>

      <div className="cards-in-portfolio">
        <h1 className="heading">Some of Our Finest Work</h1>

        {/* Gradient line */}
        <div className="gradient-line"></div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <Link to="/portfolio/all" className="filter-link">
            <button className="filter-button">All Works</button>
          </Link>
          <Link to="/portfolio/mobileapps" className="filter-link">
            <button className="filter-button">Mobile Apps</button>
          </Link>
          <Link to="/portfolio/webapps" className="filter-link">
            <button className="filter-button">Web Apps</button>
          </Link>
          <Link to="/portfolio/logos" className="filter-link">
            <button className="filter-button">Logos</button>
          </Link>
          <Link to="/portfolio/digitalmarketing" className="filter-link">
            <button className="filter-button">Digital Marketing</button>
          </Link>
        </div>

        <Finework />
      </div>
    </div>
  );
};

export default Portfolio;
