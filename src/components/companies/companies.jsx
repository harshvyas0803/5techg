import React from 'react';
import logo from '../../assets/logos/effo 1.png';
import logo1 from '../../assets/logos/logoBrother 1.png';
import logo2 from '../../assets/logos/logo-jivalla 1.png';
import logo3 from '../../assets/logos/gmart 1.png';
import logo4 from '../../assets/logos/ramasala 1.png';
import logo5 from '../../assets/logos/Vector.png';
import logo6 from '../../assets/logos/deepzi 1.png';
import './companies.css';

const Companies = () => {
  const logos = [
    { src: logo1, alt: "Brothers Industries" },
    { src: logo2, alt: "Ivalla Group" },
    { src: logo3, alt: "Gmart NX" },
    { src: logo4, alt: "Raj Industries" },
    { src: logo5, alt: "DB" },
    { src: logo, alt: "effo" },
    { src: logo6, alt: "Effo" },
  ];

  return (
    <div className="rotation-container">
      <div className="logo-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo"
          />
        ))}
        {/* Repeat logos for seamless effect */}
        {logos.map((logo, index) => (
          <img
            key={`repeat-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
