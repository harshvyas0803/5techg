import React, { useEffect } from 'react';
import './Section2.css';
import Card from '../cards/Cards';   
import img1 from '../../../assets/Techstack/Mobile Front - Devices.png';
import img2 from '../../../assets/Techstack/Laptop - Devices.png';
import img3 from '../../../assets/Techstack/Megaphone - Marketing.png';
import img4 from '../../../assets/Techstack/Clock - Utilities.png';
import img5 from '../../../assets/Techstack/VR Headset - Devices.png';
import img6 from '../../../assets/Techstack/Target - Marketing.png';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 1, y: 100 },  // Set scale to 1 here
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
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

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      ref={ref}
      className="main-container"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className="gradient-heading"
        variants={headingVariants}
      >
        You’ll be in good company
      </motion.h2>
      
      <motion.div className="cards-container">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 20px 30px rgba(0,0,0,0.3)' }} // Hover effect still enlarges
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Card image={section.image} title={section.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section2;
