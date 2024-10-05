import React from 'react';
import './Cards.css';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
