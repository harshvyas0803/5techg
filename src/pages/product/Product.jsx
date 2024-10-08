 
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';  
import './Product.css'
import Navbar from '../../components/Navbar/Navbar';
const Product = () => {
  return (
    <div className='product-text'>
        <div className="nav-in-product"><Navbar/></div>
      <h1>Our Product Page</h1>
      <Typed
        strings={[
          'We are building this page...!!',
          'Stay tuned for updates...',
          'Exciting things are coming!'
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Product;
