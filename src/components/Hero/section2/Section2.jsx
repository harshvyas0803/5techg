import React from 'react';
import './Section2.css';
import Card from '../cards/Cards';   
import img1 from '../../../assets/Techstack/Mobile Front - Devices.png';
import img2 from '../../../assets/Techstack/Laptop - Devices.png';
import img3 from '../../../assets/Techstack/Megaphone - Marketing.png';
import img4 from '../../../assets/Techstack/Clock - Utilities.png';
import img5 from '../../../assets/Techstack/VR Headset - Devices.png';
import img6 from '../../../assets/Techstack/Target - Marketing.png';

const Section2 = () => {
  const sections = [
    { image: img1, title: 'Mobile App Development' },
    { image: img2, title: 'Web App Development' },
    { image: img3, title: 'Cloud Computing Services' },
    { image: img4, title: 'Data Science Services' },
    { image: img5, title: 'Robotics Process Automation' },
    { image: img6, title: 'Digital Marketing' }
  ];

  return (
    <div className="main-container">
      <h2 className="gradient-heading">You’ll be in good company</h2>
      
      <div className="cards-container">
        {sections.map((section, index) => (
          <Card key={index} image={section.image} title={section.title} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
