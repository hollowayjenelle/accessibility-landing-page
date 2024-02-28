import React from "react";
import AboutUsCard from "../AboutUsCard";

const AboutUs = () => {
  return (
    <div className="parent-div">
      <div>
        <AboutUsCard />
        <AboutUsCard count={2} />
      </div>
    </div>
  );
};

export default AboutUs;
