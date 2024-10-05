import React from 'react';
import './Horiz_cards.css';
import slider1 from '../../assets/horiz_img/slider1.png';
import slider2 from '../../assets/horiz_img/slider2.png';
import slider3 from '../../assets/horiz_img/slider3.png';

const cardData = [
  {
    title: "Distributors Management System",
    description: "A comprehensive solution for managing the distribution of goods and services. Automates order processing, inventory management, and delivery tracking. Optimizes supply chain, reduces costs, and improves customer satisfaction.",
    imgSrc: slider1
  },
  {
    title: "Metaverse Development",
    description: "The Metaverse is basically a vision of the people of the computer sector who believe it's the next version of the internet - a shared, permanent, single, and 3D virtual place where human beings may experience life in various ways they cannot in the real world.By integrating smart devices and sensors, homeowners can enhance convenience, comfort, and energy efficiency in their homes..",
 
    imgSrc: slider2
  },
  {
    title: "Casting Industry Management Software",
    description: "Casting Industry Management Software is designed to streamline the management of casting processes in industrial settings. It provides tools for tracking inventory, managing production schedules, and optimizing workflow.This software helps companies in the casting industry to improve efficiency, reduce costs, and enhance overall productivity.",
    imgSrc: slider3
  },
  {
    title: "private cloude server",
    description: "private cloud server is a technology that enables users to access and use computing resources (such as servers, storage, and databases) over the internet, on-demand.This flexible and scalable computing model allows organizations to reduce infrastructure costs, improve agility, and scale resources according to their needs.",
    imgSrc: slider1
  }
   
];

const Horiz_cards = () => {
  return (
   <div className="newdiv">
     <div className="horiz_card_list">
      {cardData.map((card, index) => (
        <div key={index} className="horiz_card">
          <div className="card_content">
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <button className="read_more_button">Read More</button>
          </div>
          <img src={card.imgSrc} alt={card.title} className="card_image" />
        </div>
      ))}
    </div>
   </div>
  );
};

export default Horiz_cards;
