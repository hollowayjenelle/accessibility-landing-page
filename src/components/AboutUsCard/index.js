import React from "react";

import aboutus from "../../images/aboutus.png";
import "./index.css";

const AboutUsCard = ({ count }) => {
  return (
    <div className="about-us-card">
      <img
        src={aboutus}
        alt="section of a green bush"
        className="about-us-img"
      />
      <div className="about-content">
        <h4 className="about-us-title">About Us {count}</h4>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
        <button className="about-btn">
          Learn more about <span class="fa fa-long-arrow-right"></span>
        </button>
      </div>
    </div>
  );
};

export default AboutUsCard;
