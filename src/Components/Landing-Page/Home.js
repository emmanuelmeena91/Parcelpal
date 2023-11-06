import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

<Routes> 

         <Route index path="/landing" element={<Landing />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact" element={<Contact />} />
      
        </Routes>
    </div>
  );
};

export default LandingPage;
