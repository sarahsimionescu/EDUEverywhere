import React from "react";
import logo from "../images/white_logo.png"
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <div className="Main-logo">
            <img src={logo} className="White-logo" alt="EDU Everywhere logo"/>
            <p className="Logo-text">EDU Everywhere</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;