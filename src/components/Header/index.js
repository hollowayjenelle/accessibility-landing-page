import React from "react";

const Header = () => {
  return (
    <header>
      <img src="" alt="company logo which is two squares" />
      <nav>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Site Map</li>
          <select>
            <option>Eng</option>
          </select>
        </ul>
      </nav>
      <form>
        <input type="text" placeholder="Search this site" />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
