import React from "react";
import { motion } from 'framer-motion';
import './Footer.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="footer-container" initial="hidden" animate="visible" variants={fadeIn}>
      <footer className="footer">
        <div className="footer-content">
          <section className="footer-section">
            <div className="row">
              {/* First Column */}
              <div className="footer-column">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p className="paragraph1">Bringing your brand to life with breathtaking web and movie experiences</p>
                <p className="paragraph2">CONTACT:</p>
                <a href="mailto:contact@5techg.com" className="mail">contact@5techg.com</a>
              </div>

              {/* Second Column */}
              <div className="footer-column second">
                <h5>Services</h5>
                <ul className="footer-list">
                  {["Website Development", "Mobile App Development", "Search Engine Optimization", "Social Media Marketing", "Logo & Branding"].map((service, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ scale: 1.05, color: "#007BFF", transition: { duration: 0.3 } }} // Hover effect
                      className="services"
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Third Column */}
              <div className="footer-column second">
                <h5>Quick Links</h5>
                <ul className="footer-list">
                  {["Home", "About", "Contact Us"].map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ scale: 1.05, color: "#007BFF", transition: { duration: 0.3 } }} // Hover effect
                    >
                      <a href="#!">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Fourth Column */}
              <div className="footer-column second">
                <h5>Newsletter</h5>
                <p>Subscribe to receive future updates</p>
                <div className="email-input-container">
                  <input type="email" placeholder="Email address" className="newsletter-input" />
                  <motion.span className="arrow" whileHover={{ scale: 1.2 }}>&gt;</motion.span>
                </div>
              </div>
            </div>
          </section>

          <hr />
          <p className="footer-bottom-text">© 2024 5TechG. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
