import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import { Select } from '../../Pages/Select';


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select" element={<Select />} />

      </Routes>
    </div>
  );
};

export default LandingPage;
