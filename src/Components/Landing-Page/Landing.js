import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const backgroundStyles = {
    backgroundImage: 'url("https://img.lovepik.com/background/20211022/medium/lovepik-light-effect-atmospheric-gold-powder-background-image_605806949.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '',
    height: '90vh', // Make sure the background covers the full viewport height
  };

  const contentStyles = {
    backgroundColor: ')', // Set the background color with transparency
  };

  return (
    <div style={backgroundStyles}>
      <section className="py-16" style={contentStyles}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-center mb-4 text-orange-500">Welcome to ParcelPal Delivery</h2>
          <div className="flex justify-center">
            <Link to="/">
              <button className="bg-orange-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
