import React from "react";
import AboutUsCard from "../AboutUsCard";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="parent-div">
      <section className="about-container content-container">
        <AboutUsCard />
        <AboutUsCard count={2} />
      </section>
    </div>
  );
};

export default AboutUs;
