import React from "react";

import greenleaf from "../../images/greenleaf.png";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="parent-container">
      <div className="hero-container content-container">
        <div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <h5>Lorem ipsum dolor sit amet</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
            tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
            hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis,
            ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <button>Buy Now</button>
        </div>
        <div>
          <img src={greenleaf} alt="close up of green leaves" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
