import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
     {/* <div className="navbar-left">
       <i className="fas fa-truck" style={{ color: "#f5f5f5", fontSize: "24px", marginRight: "10px" }}></i>
       <span style={{ color: "#f5f5f5", fontSize: "24px" }}>ParcelPal</span>
       </div> */}
        <div className="h-10 flex items-center justify-between px-2 py-2">
        <div className="relative w-120 h-180 bg-black rounded-full flex items-center">
          <img
            className="w-8 h-8 mr-2"
            alt="Delivery Truck"
            src="truck.png"    
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="font-extrabold text-[#ffd64d] text-sm">
              <Link to="/" className="text-yellow-500">PARCELPAL.</Link>
            </div>
          </div>
          </div>
          </div>
        <div></div>
    
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav> 
  );
};

export default Navbar;
