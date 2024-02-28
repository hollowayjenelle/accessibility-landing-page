import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="parent-div contact-parent">
      <div className="contact-container content-container">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
