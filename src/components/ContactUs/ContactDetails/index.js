import React from "react";

import contact from "../../../images/contact.png";
import "./index.css";

const ContactDetails = () => {
  return (
    <div
      className="contact-info"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <h1 className="details-title">Contact Us</h1>
      <p id="details-paragraph">
        Fill up the form and ur Team will get back to you within 24 hours. Happy
        to see your message!
      </p>
      <div className="contact-details-group">
        <div className="contact-details">
          <span className="fa fa-facebook-f"></span>
          <p className="details-info">+380 93 15 32 456</p>
        </div>
        <div className="contact-details">
          <span className="fa fa-facebook-f"></span>
          <p className="details-info">example@gmail.com</p>
        </div>
        <div className="contact-details">
          <span className="fa fa-facebook-f"></span>
          <p className="details-info">Pidmurma 5a, Lviv</p>
        </div>
      </div>
      <div className="social-icons">
        <span className="fa fa-facebook-f"></span>
        <span className="fa fa-facebook-f"></span>
        <span className="fa fa-facebook-f"></span>
      </div>
    </div>
  );
};

export default ContactDetails;
