import React from 'react';
import './Cards.css';
import { motion } from 'framer-motion';

const Card = ({ image, title, description }) => {
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"  
      viewport={{ once: true }}  
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.3)' }}  
      transition={{ type: 'spring', stiffness: 300 }}  
    >
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
      <div className="card-description">{description}</div>
    </motion.div>
  );
};

export default Card;
