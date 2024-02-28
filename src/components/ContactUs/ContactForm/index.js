import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="full-name">
        <div className="first-name">
          <label for="fname">First name</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="last-name">
          <label for="lname">Last name</label>
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
        <input type="radio" id="uidev" name="position" value="UI Developer" />
        <label for="uidev">UI Developer</label>
        <input
          type="radio"
          id="uidesign"
          name="position"
          value="UI/UX Designer"
        />
        <label for="uidesign">UI/UX Designer</label>
        <input
          type="radio"
          id="accessibility"
          name="position"
          value="Accessibility Expert"
        />
        <label for="accessibility">Accessibility Expert</label>
        <input type="radio" id="qaeng" name="position" value="QA Engineer" />
        <label for="qaeng">QA Engineer</label>
        <input type="radio" id="other" name="position" value="Other" />
        <label for="other">Other</label>
      </div>
      <div className="text-area">
        <label for="message">Message</label>
        <br />
        <textarea id="message" name="message" rows="4" cols="10"></textarea>
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
      <button>Send Message </button>
    </form>
  );
};

export default ContactForm;
