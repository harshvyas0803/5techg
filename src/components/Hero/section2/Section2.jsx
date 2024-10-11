import React, { useEffect, useState } from 'react';
import './Section2.css';
import Card from '../cards/Cards';   
import img1 from '../../../assets/Techstack/Mobile Front - Devices.png';
import img2 from '../../../assets/Techstack/Laptop - Devices.png';
import img3 from '../../../assets/Techstack/Megaphone - Marketing.png';
import img4 from '../../../assets/Techstack/Clock - Utilities.png';
import img5 from '../../../assets/Techstack/VR Headset - Devices.png';
import img6 from '../../../assets/Techstack/Target - Marketing.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section2 = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,   // Triggers only once when the component enters the viewport
    threshold: 0.1,      // Percentage of the component visible before the trigger
  });
  const controls = useAnimation();  // Controls the animation

  useEffect(() => {
    if (inView) {
      controls.start('visible');    // Start animation when in view
    } else {
      controls.start('hidden');     // Hide when out of view
    }
  }, [controls, inView]);

  const sections = [
    { image: img1, title: 'Mobile App Development' },
    { image: img2, title: 'Web App Development' },
    { image: img3, title: 'Cloud Computing Services' },
    { image: img4, title: 'Data Science Services' },
    { image: img5, title: 'Robotics Process Automation' },
    { image: img6, title: 'Digital Marketing' }
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8, 
        ease: 'easeOut'
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={inViewRef}     // Attach the in-view ref to the parent container
      className="main-container"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className="gradient-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        You’ll be in good company
      </motion.h2>

      <motion.div className="cards-container">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.1, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card image={section.image} title={section.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section2;
