import React from "react";

import logo from "../../images/logo.png";
import "./index.css";

const Header = () => {
  return (
    <div className="parent-div">
      <header className="header-container content-container">
        <div>
          <img
            src={logo}
            alt="company logo which is two squares"
            className="company-logo"
          />
        </div>
        <nav className="header-nav">
          <button>About Us</button>
          <span>|</span>
          <button>Contact Us</button>
          <span>|</span>
          <button>Blog</button>
          <span>|</span>
          <button>Site Map</button>
          <span>|</span>
          <select aria-label="Language">
            <option>Eng</option>
          </select>
        </nav>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search this site"
            className="search-input"
          />
          <button className="search-button" aria-label="Search">
            <i className="fa fa-search fa-1x"></i>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Header;
