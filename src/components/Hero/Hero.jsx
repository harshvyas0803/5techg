import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import hero from '../../assets/right-hero.png'
 import Companies from '../companies/companies'
const Hero = () => {
  return (
    <div>
<div className="main">
<Navbar/>
<div className="hero">
    <div className="left">

<h1>Great products <br/> Are built by<br/> Great Teams</h1>
<p className='paragraph'>We help build and manage a team of world-class <br/>
developers to bring your vision to life.<br/>
Bringing your brand to life with breathtaking web <br/>
and mobile experiences.</p>

<a href="#" class="contact-button">Contact now</a>

    </div>
    <div className="right">
<img src={hero} alt="right-img" />
    </div>
</div>

</div>


<Companies/>









    </div>
  )
}

export default Hero