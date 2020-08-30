import React from 'react';
import '../styles/navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#treatments">Treatments</a>
      <a href="#contact">Contact</a>
      <a className="social" href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className="social" href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default Navbar;