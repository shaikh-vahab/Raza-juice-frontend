// Navbar.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '/public/Raza.png'; // Ensure the correct path to the image
import '../Css/Navigation.css';
import Footer from "./Footer";

const Navbar = () => {

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const sideMenu = document.getElementById("sideMenu");
      if (sideMenu && !sideMenu.contains(event.target) && !event.target.matches('.fas-menu')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      const menuItems = sideMenu.querySelectorAll('li');
      menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
      });
      return () => {
        menuItems.forEach(item => {
          item.removeEventListener('click', closeMenu);
        });
      };
    }
  }, []);

  const openMenu = () => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.style.right = "0";
    }
  };

  const closeMenu = () => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.style.right = "-200px";
    }
  };

  return (
    <>
    <nav>
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="Juice Logo" width='90px' />
        </Link>
      </div>
      <div className='navLinks'>
        <ul className="Home-ul" id="sideMenu">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/Juice'>Juices</Link></li>
          <li><Link to='/Dryfruits'>Dryfruits</Link></li>
          <li><Link to='/Menus'>Menus</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/MakeReservation'>Make-Order</Link></li>
          <button className="fas-cross" onClick={closeMenu}>✘</button>
        </ul>
        <button className="fas-menu" onClick={openMenu}>☰</button>
        <Link to='/AddCart'>
          <button className="menuBtn">OUR CART <sup className="sup">1</sup></button>
        </Link>
      </div>

    </nav>
   
  </>
  );
};

export default Navbar;
