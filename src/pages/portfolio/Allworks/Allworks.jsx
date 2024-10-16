import React from 'react';
import img1 from '../../../assets/portfolio-projects/all/p1.png';
import img2 from '../../../assets/portfolio-projects/all/p2.png';
import img3 from '../../../assets/portfolio-projects/all/p3.png';
import img4 from '../../../assets/portfolio-projects/all/p4.png';
import img5 from '../../../assets/portfolio-projects/all/p5.png';
import img6 from '../../../assets/portfolio-projects/all/p6.png';
import img7 from '../../../assets/portfolio-projects/all/p7.png';
import img8 from '../../../assets/portfolio-projects/all/p8.png';
import img9 from '../../../assets/portfolio-projects/all/p9.png';

const AllWorks = () => {
  const allProjects = [
    { img: img1, title: 'Brothers Indrusties' },
    { img: img2, title: 'Sanvee Flavours' },
    { img: img3, title: 'LJTex SB Exports' },
    { img: img4, title: 'Shri Satya Nidhi Bank' },
    { img: img5, title: 'Sparkle Carrier' },
    { img: img6, title: 'Manmandir Bank' },
    { img: img7, title: '5TechG HRM' },
    { img: img8, title: 'Garment Guru' },
    { img: img9, title: 'Swash' },
  ];

  return (
    <div className="finework_card_container">
      {allProjects.map((project, index) => (
        <div className="finework_card" key={index}>
          <img src={project.img} alt={project.title} className="finework_card_image" />
          <h3 className="finework_card_title">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllWorks;
