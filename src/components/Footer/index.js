import React from "react";
import footericons from "../../images/footericons.png";

import "./index.css";

const Footer = () => {
  return (
    <footer className="parent-div">
      <div className="footer-container content-container">
        <div className="footer-form">
          <h4 className="company-name">PlantMe</h4>
          <p className="subscription-txt">
            Subscribe and be the first to know about our news and promotions.
          </p>
          <input
            type="text"
            placeholder="example@gmail.com"
            id="footer-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <nav className="footer-nav">
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Blog</button>
          <button>Site Map</button>
        </nav>
        <div className="footer-contact">
          <p>Contacts</p>
          <p className="footer-contact-details">+38 063 072 0121</p>
          <p className="footer-contact-details">plantme.store@gmail.com</p>
          <img
            src={footericons}
            alt="visa and mastercard logos"
            className="footer-icons"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
