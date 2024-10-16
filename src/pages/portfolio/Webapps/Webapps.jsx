import React from 'react';
import './Webapps.css';
import img1 from '../../../assets/portfolio-projects/webapps/wa1.png';
import img2 from '../../../assets/portfolio-projects/webapps/wa2.png';
import img3 from '../../../assets/portfolio-projects/webapps/wa3.png';
import img4 from '../../../assets/portfolio-projects/webapps/wa4.png';
import img5 from '../../../assets/portfolio-projects/webapps/wa5.png';
import img6 from '../../../assets/portfolio-projects/webapps/wa6.png';

const Webapps = () => {
  const webProjects = [
    { img: img1, title: 'Web App Project 1' },
    { img: img2, title: 'Web App Project 2' },
    { img: img3, title: 'Web App Project 3' },
    { img: img4, title: 'Web App Project 4' },
    { img: img5, title: 'Web App Project 5' },
    { img: img6, title: 'Web App Project 6' },
  ];

  return (
    <div className="webapps_card_container">
      {webProjects.map((project, index) => (
        <div className="webapps_card" key={index}>
          <img src={project.img} alt={project.title} className="webapps_card_image" />
          <h3 className="webapps_card_title">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Webapps;
