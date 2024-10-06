// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Hero/Hero'; // adjust paths as necessary
import About from '../src/pages/about/About';
import Portfolio from '../src/pages/portfolio/Portfolio'; // new portfolio page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />  
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
