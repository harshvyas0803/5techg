import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import hero from '../../assets/right-hero.png';
import Companies from '../companies/companies';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Horiz_cards from '../horiz_cards/Horiz_cards';
import Finework from '../finework/Finework';
import Testimonials from '../testimonials/Testimonials';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.2 } },
      }}
    >
      <Navbar />
      <div className="main">
        <div className="hero">
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.h1 className='heading'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ fontSize: '4vh' }}
            >
              Great products <br /> Are built by<br /> Great Teams
            </motion.h1>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            >
              We help build and manage a team of world-class <br />
              developers to bring your vision to life.<br />
              Bringing your brand to life with breathtaking web <br />
              and mobile experiences.
            </motion.p>

            <motion.a
              href="#"
              className="contact-button"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact now
            </motion.a>
          </motion.div>

          <motion.div
            className="right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <img src={hero} alt="right-img" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, staggerChildren: 0.3 }}
        viewport={{ once: false }}   
      >
        <Companies />
        <Section2 />
        <Horiz_cards />
        <Section3 />
        <Finework />
        <Testimonials />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
