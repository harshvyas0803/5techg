import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiMongodb, SiMysql, SiFlutter } from "react-icons/si";
import './Testimonials.css';
import profile from '../../assets/profile.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1 } 
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <motion.div 
      className="testimonials_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
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

      {/* <h3 className="testimonial_heading">Our happy clients say about us</h3> */}
   
    </motion.div>
  );
}

export default Testimonials;
