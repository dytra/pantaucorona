import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div id="header-container">
        <a id="nav-prev" href=""><i className="fas fa-chevron-left"></i></a>
        <h1><span id="header-pantau">pantau</span><span id="header-corona">corona</span></h1>
        <span></span>
      </div>
    </header>
  )
}

export default Header;