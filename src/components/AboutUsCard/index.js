import React from "react";

import aboutus from "../../images/aboutus.png";

const index = ({ count }) => {
  return (
    <div>
      <img src={aboutus} alt="section of a green bush" />
      <div>
        <h4>About Us {count}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
        <button>Learn more about</button>
      </div>
    </div>
  );
};

export default index;
