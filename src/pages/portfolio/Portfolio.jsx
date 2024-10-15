import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='main-portfolio'>
      <Navbar />
      <div className="content-project">
        <div className="heading-project">
          <h1>Some of our finest work</h1>
        </div>

        {/* Filters Section */}
        <div className="filters">
          <span className="filter-item">All works</span>
          <span className="filter-item">Mobile Apps</span>
          <span className="filter-item">Web Apps</span>
          <span className="filter-item">Logos</span>
          <span className="filter-item">Digital Marketing</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
