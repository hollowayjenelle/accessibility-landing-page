import React from "react";

import contact from "../../../images/contact.png";

const ContactDetails = () => {
  return (
    <div
      className="contact-info"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <h1>Contact Us</h1>
      <p>
        Fill up the form and ur Team will get back to you within 24 hours. Happy
        to see your message!
      </p>
      <div className="contact-details">
        <span className="fa fa-facebook-f"></span>
        <p>+380 93 15 32 456</p>
      </div>
      <div className="contact-details">
        <span className="fa fa-facebook-f"></span>
        <p>example@gmail.com</p>
      </div>
      <div className="contact-details">
        <span className="fa fa-facebook-f"></span>
        <p>Pidmurma 5a, Lviv</p>
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
