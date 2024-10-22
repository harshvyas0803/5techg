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
    triggerOnce: false, 
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
    { 
      image: img1, 
      title: 'Mobile App Development', 
      description: 'Our team specializes in creating exceptional mobile apps that captivate users. From innovative design to seamless functionality, trust us to deliver remarkable mobile solutions that drive success.' 
    },
    { 
      image: img2, 
      title: 'Web App Development', 
      description: 'Our expertise lies in creating standout websites that leave a lasting impression. From captivating design to seamless functionality, trust us to elevate your online presence and drive digital success.' 
    },
    { 
      image: img3, 
      title: 'Cloud Computing Services', 
      description: 'We provide end-to-end cloud computing services, including private cloud setup, management, and expertise in Google Cloud, AWS, and Azure for public cloud deployment.' 
    },
    { 
      image: img4, 
      title: 'Data Science Services', 
      description: 'Our data science services leverage advanced analytics and machine learning techniques to extract valuable insights from your data. From data preprocessing to predictive modeling, we help businesses harness the power of data to make informed decisions and drive growth.' 
    },
    { 
      image: img5, 
      title: 'Robotics Process Automation', 
      description: 'Our robotic process automation (RPA) services streamline repetitive tasks, freeing up valuable human resources. With our expertise in RPA implementation and optimization, we help businesses enhance productivity, reduce errors, and achieve greater operational efficiency.' 
    },
    { 
      image: img6, 
      title: 'Digital Marketing', 
      description: 'Our IoT development services empower businesses to harness the potential of the Internet of Things. From device connectivity to data analytics, we create innovative IoT solutions that drive efficiency and enable smart, connected experiences.' 
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 1, y: 100 },
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
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 20px 30px rgba(0,0,0,0.3)' }} 
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <img src={section.image} alt={section.title} />
            <h3 className="card-title_">{section.title}</h3>
            <p className="card-description">{section.description}</p>
     
          </motion.div>
        ))} 
      </motion.div>
    </motion.div>
  );
};

export default Section2;
