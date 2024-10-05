import React from 'react';
import './Section3.css';  
import section3img from '../../../assets/section3img.png';  

const Section3 = () => {
  return (
    <div className="section3_container">
      <div className="section3_text">
        <h1 className="section3_title">A Complete Solution to Your Business</h1>
        <h2 className="section3_subtitle">What We Can Do?</h2>
        <p className="section3_description">
          We put a strong focus on the needs of your business to figure out <br /> solutions that best fit your demand and nail it.
        </p>
        <h2 className="section3_support_title">Need a Hand?</h2>
        <p className="section3_support_description">
          Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.
        </p>
        <h2 className="section3_integrations_title pwaei">Packed with All Essential Integrations</h2>
        <p className="section3_integrations_description">
          We put a strong focus on the needs of your <br /> business to figure out solutions that best fit your <br />demand and nail it.
        </p>
      </div>
     <div className="section3_img_container"> <img src={section3img} alt="Business Solutions" className="section3_image" /></div>
    </div>
  );
};

export default Section3;
