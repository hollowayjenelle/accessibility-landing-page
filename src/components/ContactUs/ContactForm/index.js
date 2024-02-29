import React from "react";

import "./index.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="full-name">
        <div className="first-name">
          <label for="fname">
            <sup className="fa fa-asterisk"></sup>First name
          </label>
          <br />
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="last-name">
          <label for="lname">
            <sup className="fa fa-asterisk"></sup>Last name
          </label>
          <br />
          <input type="text" id="lname" name="lname" />
        </div>
      </div>
      <div className="email-phone">
        <div className="email">
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
        </div>
        <div className="phone">
          <label for="phone">Phone Number</label>
          <br />
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className="positions">
        <div>
          <input type="radio" id="uidev" name="position" value="UI Developer" />
          <label for="uidev">UI Developer</label>
        </div>
        <div>
          <input
            type="radio"
            id="uidesign"
            name="position"
            value="UI/UX Designer"
          />
          <label for="uidesign">UI/UX Designer</label>
        </div>
        <div>
          <input
            type="radio"
            id="accessibility"
            name="position"
            value="Accessibility Expert"
          />
          <label for="accessibility">Accessibility Expert</label>
        </div>
        <div>
          <input type="radio" id="qaeng" name="position" value="QA Engineer" />
          <label for="qaeng">QA Engineer</label>
        </div>
        <div>
          <input type="radio" id="other" name="position" value="Other" />
          <label for="other">Other</label>
        </div>
      </div>
      <div className="text-area">
        <label for="message">Message</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="10"
          placeholder="Text here..."
        ></textarea>
      </div>
      <div className="terms">
        <input
          type="checkbox"
          id="accept1"
          name="accept1"
          value="Accept the Terms"
        />
        <label for="accept1">Accept the Terms</label>
        <input
          type="checkbox"
          id="accept2"
          name="accept2"
          value="Accept the Terms 2"
        />
        <label for="accept2">Accept the Terms 2</label>
      </div>
      <div className="btn-section">
        <button className="send-btn">Send Message </button>
      </div>
    </form>
  );
};

export default ContactForm;
