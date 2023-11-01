import { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'


export default class NavBar extends Component {

  state = { clicked: false }; 

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render () { 
    return ( 
      <nav>
       <div className="h-10 flex items-center justify-between px-2 py-2">
        <div className="relative w-120 h-180 bg-black rounded-full flex items-center">
          <img
            className="w-8 h-8 mr-2"
            alt="Delivery Truck"
            src="delivery-truck.png" 
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="font-extrabold text-[#ffd64d] text-sm">
              <h1 to="/" className="text-yellow-500">PARCELPAL</h1>
            </div>
          </div>
          </div>
          </div>
        <div>
          <ul id='navbar' className={this.state.clicked ? 'navbar active' : 'navbar'}>
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/sendparcel">Send Parcel</NavLink></li>
            <li><NavLink to="/tracking" >Tracking</NavLink></li>
            <li><NavLink to="/payment">Payment</NavLink></li>
            <li><NavLink to="/details">Details </NavLink></li>

            <li><NavLink to="/profile"><i className="fa-regular fa-user"></i></NavLink></li>
          </ul>
        </div>
        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
        </div>
      </nav>
    );
  }
}