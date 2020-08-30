import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <div className="line1"></div>
        <h1>Contact</h1>
        <div className="line2"></div>
      </div>
      <div className="contact-div">
        <div className="time">
          <p>WORKING DAYS 8:00 – 20:00 & SUNDAYS 8:00 – 16:00</p>
        </div>
        <div className="contact-info">
          <p className="num">(711) 265-9193</p>
          <p className="email">something@something.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;