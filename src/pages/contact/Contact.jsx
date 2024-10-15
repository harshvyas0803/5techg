import React from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import { div } from 'framer-motion/client';

const Contact = () => {
  return (
     <div className="main-contact">
        <Navbar/>
    <div className="contact-container">
     
      <div className="contact-left">
        <h2>Send a Message</h2>
        <form className="message-form">
          <textarea
            className="message-box"
            placeholder="Write your message or complaint here..."
            rows="8"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      <div className="contact-right">
        <h3>Find Us</h3>
        <p><strong>Our Location:</strong> Pune, Maharashtra</p>
        <p><strong>Email Address:</strong> contact@5techg.com</p>
        <p><strong>Phone Number:</strong> 7028828831</p>
      </div>
    </div></div>
  );
};

export default Contact;
