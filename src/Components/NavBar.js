import { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../Css/Navbar.css'


export default class NavBar extends Component {

  state = { clicked: false }; 

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render () { 
    return (
      <nav>
        <a href='/home'>
        <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#FFBC7D"></path> </svg>        </a>
        <div>
          <ul id='navbar' className={this.state.clicked ? 'navbar active' : 'navbar'}>
            <li className='text-yellow-500'><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/sendparcel">Send Parcel</NavLink></li>
            <li><NavLink to="/about" >Tracking</NavLink></li>
            <li><NavLink to="/contact">Transaction</NavLink></li>
            <li><NavLink to="/contact">Details </NavLink></li>

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
