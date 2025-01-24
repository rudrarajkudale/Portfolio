import React from "react";
import "../App.css";
import "boxicons";

const Header = () => (
  <header className="header">
    <a href="#" className="logo">Portfolio</a>
    <i className="bx bx-menu" id="menu-icon"></i>
    <nav className="navbar">
      <a href="#home" className="active">Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#about">About</a>
    </nav>
  </header>
);

export default Header;
