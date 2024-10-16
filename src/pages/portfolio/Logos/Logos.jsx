import React from 'react';
import './Logos.css';
import img1 from '../../../assets/portfolio-projects/logos/l1.png';
import img2 from '../../../assets/portfolio-projects/logos/l2.png';
import img3 from '../../../assets/portfolio-projects/logos/l3.png';
import img4 from '../../../assets/portfolio-projects/logos/l4.png';
import img5 from '../../../assets/portfolio-projects/logos/l5.png';
import img6 from '../../../assets/portfolio-projects/logos/l6.png';
import img7 from '../../../assets/portfolio-projects/logos/l7.png';
import img8 from '../../../assets/portfolio-projects/logos/l8.png';
import img9 from '../../../assets/portfolio-projects/logos/l9.png';
import img10 from '../../../assets/portfolio-projects/logos/l10.png';
import img11 from '../../../assets/portfolio-projects/logos/l11.png';
import img12 from '../../../assets/portfolio-projects/logos/l12.png';

const Logos = () => {
  const logoProjects = [
    { img: img1, title: 'Logo Project 1' },
    { img: img2, title: 'Logo Project 2' },
    { img: img3, title: 'Logo Project 3' },
    { img: img4, title: 'Logo Project 4' },
    { img: img5, title: 'Logo Project 5' },
    { img: img6, title: 'Logo Project 6' },
    { img: img7, title: 'Logo Project 7' },
    { img: img8, title: 'Logo Project 8' },
    { img: img9, title: 'Logo Project 9' },
    { img: img10, title: 'Logo Project 10' },
    { img: img11, title: 'Logo Project 11' },
    { img: img12, title: 'Logo Project 12' },
  ];

  return (
    <div className="logos_card_container">
      {logoProjects.map((project, index) => (
        <div className="logos_card" key={index}>
          <img src={project.img} alt={project.title} className="logos_card_image" />
          <h3 className="logos_card_title">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Logos;
