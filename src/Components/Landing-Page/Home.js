import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import { Select } from '../../Pages/Select';
import Landing from './Landing'; // Import the Landing component
import HomePage from './HomePage';
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select" element={<Select />} /> 
        <Route path="/Parcelpal" element={<Landing />} /> 
        <Route path="/" element={<HomePage />} /> 
        
      </Routes>
    </div>
  );
};

export default LandingPage;
