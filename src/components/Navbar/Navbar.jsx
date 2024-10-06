import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>



<div className="navbar">
<div className="logo"><img src={logo} alt="" /></div>

<div className="others">
<ul className="navbar-links">
            <li><a href="/" className="navbar-link">Home</a></li>
            <li><a href="/about" className="navbar-link">About</a></li>
            <li><a href="/Portfolio" className="navbar-link">Portfolio</a></li>
            <li><a href="/product" className="navbar-link">Product</a></li>
            <li><a href="/contact" className="navbar-link">Contact</a></li>
            <li>
              <a href="tel:+917028828831" className="call-now">
                Call Now→
              </a>  
            </li>
          </ul>
</div>

</div>










    </div>
  )
}

export default Navbar