import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="parent-div contact-parent">
      <section className="contact-container content-container">
        <ContactDetails />
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUs;
