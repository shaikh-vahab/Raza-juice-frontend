// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import Logo from '/public/Raza.png'; // Import the correct image file
import '../Css/Navigation.modules.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       <Link to={'/'}> <img src={Logo} alt="Juice Logo" width={'70px'} /></Link>
      </div>
      <div className='navLinks'>
        <ul className="Home-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to={'/Juices'}>Juices</Link></li>
          <li><Link to={'/Dryfruits'}>Dryfruits</Link></li>
          <li><Link to={'/Menus'}>Menus</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/MakeReservation'}>Make-Reservation</Link></li>
        </ul>
       <Link to={'/AddCart'}> <button className="menuBtn">OUR CART <sup className="sup">1</sup></button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
