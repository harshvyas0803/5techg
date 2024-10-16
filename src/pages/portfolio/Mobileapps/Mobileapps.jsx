import React from 'react';
import './Mobileapps.css';
import img1 from '../../../assets/portfolio-projects/mobileapps/ma1.png';
import img2 from '../../../assets/portfolio-projects/mobileapps/ma2.png';
import img3 from '../../../assets/portfolio-projects/mobileapps/ma3.png';
import img4 from '../../../assets/portfolio-projects/mobileapps/ma4.png';
import img5 from '../../../assets/portfolio-projects/mobileapps/ma5.png';
import img6 from '../../../assets/portfolio-projects/mobileapps/ma6.png';
import img7 from '../../../assets/portfolio-projects/mobileapps/ma7.png';
import img8 from '../../../assets/portfolio-projects/mobileapps/ma8.png';
import img9 from '../../../assets/portfolio-projects/mobileapps/ma9.png';

const MobileApps = () => {
  const mobileProjects = [
    { img: img1, title: 'Mobile Project 1' },
    { img: img2, title: 'Mobile Project 2' },
    { img: img3, title: 'Mobile Project 3' },
    { img: img4, title: 'Mobile Project 4' },
    { img: img5, title: 'Mobile Project 5' },
    { img: img6, title: 'Mobile Project 6' },
    { img: img7, title: 'Mobile Project 7' },
    { img: img8, title: 'Mobile Project 8' },
    { img: img9, title: 'Mobile Project 9' },
  ];

  return (
    <div className="mobileapps_card_container">
      {mobileProjects.map((project, index) => (
        <div className="mobileapps_card" key={index}>
          <img src={project.img} alt={project.title} className="mobileapps_card_image" />
          <h3 className="mobileapps_card_title">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MobileApps;
