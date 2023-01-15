import React from "react";
import logo from "../images/white_logo.png"
import user from "../images/user.png"
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <div className="Main-logo">
        <img src={logo} className="White-logo" alt="EDU Everywhere logo"/>
        <p className="Logo-text">EDU Everywhere</p>
      </div>
      {props.showLogin ?
        <button onClick={() => navigate('/login')}>Sign-Up</button>
      : props.hideProfile ?
        null
      :
      <img src={user} className="User-icon" alt="User icon"/>
      }
      
    </nav>
  )
}

export default Navbar;