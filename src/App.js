 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Hero/Hero'; 
import About from '../src/pages/about/About';
import Portfolio from '../src/pages/portfolio/Portfolio';  
import Product from './pages/product/Product'
import Contact from './pages/contact/Contact'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/product" element={<Product />} />  
        <Route path='/contact' element={<Contact/>}/>
 
        
      </Routes>
    </Router>
  );
}

export default App;
