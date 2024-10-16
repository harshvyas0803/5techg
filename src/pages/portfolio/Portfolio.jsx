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
    <div className='main-portfolio-section'>
      <Navbar />
      <div className="portfolio-content">
        <div className="portfolio-heading">
          <h1>Some of our finest work</h1>
        </div>

        <div className="portfolio-filters">
          <span
            className={`portfolio-filter-item ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All works
          </span>
          <span
            className={`portfolio-filter-item ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile Apps
          </span>
          <span
            className={`portfolio-filter-item ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Apps
          </span>
          <span
            className={`portfolio-filter-item ${activeFilter === 'logos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('logos')}
          >
            Logos
          </span>
          <span
            className={`portfolio-filter-item ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Digital Marketing
          </span>
        </div>

        <div className="portfolio-project-display">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
