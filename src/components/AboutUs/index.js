import React from "react";
import AboutUsCard from "../AboutUsCard";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="parent-div">
      <div className="about-container content-container">
        <AboutUsCard />
        <AboutUsCard count={2} />
      </div>
    </div>
  );
};

export default AboutUs;
