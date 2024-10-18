import React from 'react';
import './Section3.css';  
import section3img from '../../../assets/section3img.png';  
import { motion } from 'framer-motion';

const Section3 = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
  };

  return (
    <motion.div
      className="section3_container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Set to false to allow repeated animations when the component comes into view multiple times
    >
      {/* Background color animation */}
      <motion.div
        className="background"
        initial={{ backgroundColor: '#fff' }}
        animate={{ backgroundColor: '#f4f4f4' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div className="section3_text" variants={staggerContainer}>
        <motion.h1 className="section3_title" variants={fadeInUp}>
          A Complete Solution to Your Business
        </motion.h1>
        <motion.h2 className="section3_subtitle" variants={fadeInLeft}>
          What We Can Do?
        </motion.h2>
        <motion.p className="section3_description" variants={fadeInRight}>
          We put a strong focus on the needs of your business to figure out <br /> 
          solutions that best fit your demand and nail it.
        </motion.p>
        <motion.h2 className="section3_support_title" variants={fadeInLeft}>
          Need a Hand?
        </motion.h2>
        <motion.p className="section3_support_description" variants={fadeInRight}>
          Our support team is available 24/7 a day, 7 days a week and can get ready for solving 
          any of your situational rising problems.
        </motion.p>
        <motion.h2 className="section3_integrations_title" variants={fadeInLeft}>
          Packed with All Essential Integrations
        </motion.h2>
        <motion.p className="section3_integrations_description" variants={fadeInRight}>
          We put a strong focus on the needs of your <br /> business to figure out solutions that best fit your <br />
          demand and nail it.
        </motion.p>
      </motion.div>

      {/* Image with hover animation */}
      <div 
        className="section3_img_container"
         
      >
        <img
          src={section3img} 
          alt="Business Solutions" 
          className="section3_image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Section3;
