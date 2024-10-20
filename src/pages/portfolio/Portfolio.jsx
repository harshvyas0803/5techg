import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Portfolio.css';
import AllWorks from '../portfolio/Allworks/Allworks';
import MobileApps from '../portfolio/Mobileapps/Mobileapps';
import WebApps from '../portfolio/Webapps/Webapps';
import Logos from '../portfolio/Logos/Logos';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');  

  const renderProjects = () => {
    switch (activeFilter) {
      case 'mobile':
        return <MobileApps />;
      case 'web':
        return <WebApps />;
      case 'logos':
        return <Logos />;
      default:
        return <AllWorks />;
    }
  };

  return (
    <div className='portfolio-container'>
      <Navbar />
      <div className="portfolio-content">
        <h1 className="portfolio-title">Some of our finest work</h1>

        <div className="filter-buttons">
          {['all', 'mobile', 'web', 'logos', 'digital'].map(filter => (
            <span
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'digital' ? 'Digital Marketing' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Apps`}
            </span>
          ))}
        </div>

        <div className="project-display">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;