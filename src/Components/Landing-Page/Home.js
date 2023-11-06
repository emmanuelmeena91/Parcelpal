import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
