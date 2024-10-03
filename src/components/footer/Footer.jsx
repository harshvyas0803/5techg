import React from "react";
import './Footer.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <section className="footer-section">
            <div className="row">
              {/* First Column */}
              <div className="footer-column">
                <img src={logo} alt="Logo" />
                <p className="paragraph1">Bringing your brand to life with breathtaking web and movie experiences</p>
                <p className="paragraph2">CONTACT:</p>
                <a href="mailto:contact@5techg.com" className="mail">contact@5techg.com</a>
              </div>

              {/* Second Column */}
              <div className="footer-column second">
                <h5>Services</h5>
                <ul className="footer-list">
                  <li className="services">Website Development</li>
                  <li className="services">Mobile App Development</li>
                  <li className="services">Search Engine Optimization</li>
                  <li className="services">Social Media Marketing</li>
                  <li className="services">Logo & Branding</li>
                </ul>
              </div>

              {/* Third Column */}
              <div className="footer-column second">
                <h5>Quick Links</h5>
                <ul className="footer-list">
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">About</a></li>
                  <li><a href="#!">Contact Us</a></li>
                </ul>
              </div>

              {/* Fourth Column */}
              <div className="footer-column second">
                <h5>Newsletter</h5>
                <p>Subscribe to receive future updates</p>
                <div className="email-input-container">
                  <input type="email" placeholder="Email address" className="newsletter-input" />
                  <span className="arrow">&gt;</span>
                </div>
              </div>
            </div>
          </section>

          <hr />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
