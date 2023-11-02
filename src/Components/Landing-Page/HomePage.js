import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Contact />
    </div>
  );
};

export default LandingPage;
