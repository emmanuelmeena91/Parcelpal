import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <i className="fas fa-truck" style={{ color: "#f5f5f5", fontSize: "24px", marginRight: "10px" }}></i>
        <span style={{ color: "#f5f5f5", fontSize: "24px" }}>ParcelPal</span>
      </div>
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
