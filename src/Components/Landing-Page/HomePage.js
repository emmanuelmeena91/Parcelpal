import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
      <Footer />
    </div>
  );
};

export default LandingPage;
