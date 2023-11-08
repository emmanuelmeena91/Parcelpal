import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className="bg-gray-300 min-h-screen">
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-4">Welcome to ParcelPal Delivery</h2>
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
    </div>
  );
};

export default Landing;
