import React from "react";

import logo from "../../images/logo.png";
import "./index.css";

const Header = () => {
  return (
    <div className="parent-div">
      <header className="header-container">
        <div>
          <img
            src={logo}
            alt="company logo which is two squares"
            className="company-logo"
          />
        </div>
        <nav className="header-nav">
          <a href="google.com">About Us</a> |<a>Contact Us</a> |<a>Blog</a> |
          <a>Site Map</a> |
          <select>
            <option>Eng</option>
          </select>
        </nav>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search this site"
            className="search-input"
          />
          <button className="search-button">
            <i className="fa fa-search fa-1x"></i>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Header;
