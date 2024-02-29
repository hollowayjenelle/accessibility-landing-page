import React from "react";

import greenleaf from "../../images/greenleaf.png";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="parent-div hero-parent">
      <section className="hero-container content-container">
        <div className="hero-info">
          <h1 className="hero-title">Lorem ipsum dolor sit amet</h1>
          <h5 className="hero-subtitle">Lorem ipsum dolor sit amet</h5>
          <p className="hero-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
            tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
            hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis,
            ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <button className="hero-button">Buy Now</button>
        </div>
        <div>
          <img
            src={greenleaf}
            alt="close up of green leaves"
            className="hero-section-img"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
