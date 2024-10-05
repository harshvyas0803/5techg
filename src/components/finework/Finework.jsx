import React from 'react';
import './Finework.css';
import img1 from '../../assets/finest work/1.png';
import img2 from '../../assets/finest work/2.png';
import img3 from '../../assets/finest work/3.png';
import img4 from '../../assets/finest work/4.png';
import img5 from '../../assets/finest work/5.png';
import img6 from '../../assets/finest work/6.png';

const Finework = () => {
   
  const fineworkProjects = [
    { img: img1, title: 'Brothers Indrusties' },
    { img: img2, title: 'Sanvee Flavours' },
    { img: img3, title: 'LJTex SB Exports' },
    { img: img4, title: 'Shri Satya Nidhi Bank' },
    { img: img5, title: 'Sparkle Carier' },
    { img: img6, title: 'Manmandir Bank' },
    { img: img4, title: '5TechG HRM' }, 
    { img: img5, title: 'Garment Guru' },
    { img: img6, title: 'Swash' },
  ];

  return (
    <div className="finework_main_container">
      <h2 className="finework_heading">Some of Our Fine Work</h2>
      <div className="finework_card_container">
        {fineworkProjects.map((project, index) => (
          <div className="finework_card" key={index}>
            <img src={project.img} alt={`Fine work ${index + 1}`} className="finework_card_image" />
            <h3 className="finework_card_title">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finework;
