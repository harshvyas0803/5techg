import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import photo1 from '../../assets/Frame 3.png';
import React from 'react';
import profile from '../../assets/koli.png';

const About = () => {
  return (
    <div>
      <div className="navbarinabout">
        <Navbar />
      </div>

      <div className="contentdiv">
        <div className="left">
          <h3>Our information</h3>
          <h2>Introduction</h2>
          <p>
            We are a team of experienced professionals with thorough expertise in marketing, developing and designing. We build brands' success digitally through our exceptional IT solutions like web development, mobile app development, full-stack web development, UI/UX development, etc. Our expertise extends to developing software, games, mobile applications, and much more in all their forms that you can think of, striving to minimize our carbon footprint and contribute positively to our communities.
          </p>
        </div>
        <div className="right">
          <img src={photo1} alt="" />
        </div>
      </div>

      <div className="contentdiv2">
        <div className="text-content">
          <h3 className="team-title">Our Awesome Team</h3>
          <h2 className="team-subtitle">We Have a Team of 40+ Talented <br /> Developers and Designers</h2>
          <p className="company-description">
            Our software company boasts a team of 40 skilled developers and designers who are passionate about creating innovative solutions for our clients.
          </p>
          <blockquote className="ceo-quote">
            "As the CEO of the company, I am incredibly proud of the talented team of developers and designers we have assembled. Together, we strive to deliver the highest quality solutions to our clients and push the boundaries of innovation in the technology industry. Thank you for choosing us to bring your ideas to life."
          </blockquote>
        </div>
        <img src={profile} alt="Team Illustration" className="team-image" />
      </div>

      <div className="timeline-section">
        <div className="timeline-background">
          <h2 className='gradient-text'>Our Journey Timeline</h2>
          <p className='para'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="timeline">
          <div className="timeline-event left">
            <div className="year">2017</div>
            <p>Our journey of innovation and growth began.</p>
          </div>
          <div className="timeline-event right">
            <div className="year">2018</div>
            <p>In our first year, we completed key projects, establishing ourselves as a trusted industry partner.</p>
          </div>
          <div className="timeline-event left">
            <div className="year">2019</div>
            <p>Year two saw significant expansion with new product launches, solidifying our market position.</p>
          </div>
          <div className="timeline-event right">
            <div className="year">2020</div>
            <p>Amid challenges, we showed resilience, adapting to changes while continuing to deliver value.</p>
          </div>
          <div className="timeline-event left">
            <div className="year">2021</div>
            <p>We entered new markets and gained key clients, reinforcing our industry leadership.</p>
          </div>
          <div className="timeline-event right">
            <div className="year">2022</div>
            <p>Celebrating our 5th anniversary, we launched a rebranding campaign to drive future success.</p>
          </div>
          <div className="timeline-event left">
            <div className="year">2023</div>
            <p>As we enter year six, we remain focused on sustainable growth and client value.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
