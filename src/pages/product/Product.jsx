import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Product.css';
import img1 from '../../assets/product/p1.png';
import img2 from '../../assets/product/p2.png';
import img3 from '../../assets/product/p3.png';
import img4 from '../../assets/product/p4.png';
import img5 from '../../assets/product/p5.png';
import img6 from '../../assets/product/p6.png';

const Product = () => {
  const productCards = [
    { img: img1, title: 'Clinic Management software', description: 'Reinvent your clinic and enhance your patient care with 5tech-G. From scheduling appointments to patients registrations, check-in, consultations, prescriptions, billing and reporting. the comprehensive 5tech-G platform enables you to deliver a seamless customer experience to your patients. Here\'s an opportunity to scale up your business.' },
    { img: img2, title: 'Market Pro Mobile App', description: 'Send your business ad via WhatsApp and SMS Automatically on every new call - all incoming, outgoing, missed, dial calls. Can add photos, videos, or PDFs. It is not necessary to save the number for WhatsApp. You can change the ad whenever you want' },
    { img: img3, title: 'Distribution System', description: 'An advanced solution for optimizing goods and services distribution, streamlining supply chain processes, reducing costs, and improving efficiency for businesses through automation and real-time visibility.' },
    { img: img4, title: 'Smart Factory software', description: 'Smart factory software is a computer program that leverages technologies like IoT, AI, and data analytics to automate and optimize manufacturing processes in a factory. It collects real-time data, enables machine-to-machine communication, predicts maintenance needs, automates workflows.                                       ' },
    { img: img5, title: 'ERP system for casting company', description: 'Streamline casting operations with an efficient ERP system managing inventory, production planning, resource allocation, and quality control.' },
    { img: img6, title: 'Matrimonial app', description: 'A user-friendly mobile application connecting individuals for matrimonial purposes, facilitating profile creation, partner search, and communication for a seamless matchmaking experience.           ' },
  ];

  return (
    <div className="product-navbar">
      <Navbar />
      <div className="product_cards_container">
        {productCards.map((product, index) => (
          <div className="product_card" key={index}>
            <img src={product.img} alt={product.title} className="product_card_image" />
            <h3 className="product_card_title">{product.title}</h3>
            <p className="product_card_description">{product.description}</p>
            <button className="read_more__">
                Read More
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
