import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href='/'className="navbar-logo">AVOCET</a>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#about">About</a>
          <a href="#about">Orders</a>
          <a href="#services">Services</a>
          <a href="#services">Faqs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
