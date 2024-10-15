import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Hero/Hero'; 
import About from '../src/pages/about/About';
import Portfolio from '../src/pages/portfolio/Portfolio';  
import Product from './pages/product/Product';
import Contact from './pages/contact/Contact';
import Finework from './components/finework/Finework'; // Import your Finework component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/all" element={<Finework category="all" />} />
        <Route path="/portfolio/mobileapps" element={<Finework category="mobileapps" />} />
        <Route path="/portfolio/webapps" element={<Finework category="webapps" />} />
        <Route path="/portfolio/logos" element={<Finework category="logos" />} />
        <Route path="/portfolio/digitalmarketing" element={<Finework category="digitalmarketing" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

