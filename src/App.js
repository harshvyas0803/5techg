import './App.css';
import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';  // Assuming Navbar exists in this path
import Hero from '../src/components/Hero/Hero';        // Assuming Hero exists in this path
import About from '../src/pages/about/About';     // Assuming About exists in this path
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
     
        
        <Routes>
   
          <Route path="/" element={<Hero />} />

     
          <Route path="/about" element={<About />} />

    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
