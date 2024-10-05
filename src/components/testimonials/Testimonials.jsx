import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiMongodb, SiMysql, SiFlutter } from "react-icons/si";
import './Testimonials.css';
import profile from '../../assets/profile.png'

const Testimonials = () => {
  return (
    <div className="testimonials_container">
      <h2 className="testimonials_heading">Harness the Power of Cutting-Edge <br /> Technologies Across All Domains</h2>
      <p className="testimonials_description">
        At 5techg, we specialize in leveraging the latest technologies to drive <br /> success across various domains.
      </p>

      <div className="logos_container">
        <span className="logo_color node"><FaNodeJs /></span>
        <span className="logo_color next"><SiNextdotjs /></span>
        <span className="logo_color react"><SiReact /></span>
        <span className="logo_color mongodb"><SiMongodb /></span>
        <span className="logo_color mysql"><SiMysql /></span>
        <span className="logo_color flutter"><SiFlutter /></span>
      </div>

      <h3 className="testimonial_heading">Our happy clients say about us</h3>
      <div className="testimonials">
        <div className="testimonial">
          <p>"5TechG delivered exceptional solutions that revolutionized our operations. Their attention to detail, commitment to quality, and ability to understand our unique requirements set them apart. We're grateful for their contribution to our success and would recommend them to anyone in need of reliable IT services."</p>
          <div className="client_info">
            <img src={profile} alt="Client" className="client_photo" />
            <h4>Wilson Bergson</h4>
          </div>
        </div>

        <div className="testimonial">
          <p>"Working with 5TechG has been a game-changer for our business. Their software development expertise helped us bring our ideas to life, and the end result exceeded our expectations. The team at 5TechG is dedicated, skilled, and innovative. We look forward to continuing our partnership with them in the future."</p>
          <div className="client_info">
            <img src={profile} alt="Client" className="client_photo" />
            <h4>Wilson Bergson</h4>
          </div>
        </div>

        <div className="testimonial">
          <p>"Our experience with 5TechG has been outstanding. They provided us with top-notch software solutions that streamlined our operations and improved our efficiency. The team was highly professional, responsive, and knowledgeable. We highly recommend 5TechG to any organization seeking reliable IT services."</p>
          <div className="client_info">
            <img src={profile} alt="Client" className="client_photo" />
            <h4>Wilson Bergson</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
