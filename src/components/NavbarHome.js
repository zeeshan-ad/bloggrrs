import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";
import "./Navbar.css";
const NavbarHome = (props) => {
  const {
    user,
    handleLogout
  } = props;

  return (
    <div className="NavbarHome">
      <div className="Logo">
        <a>
          <img src={logo} />
        </a>
      </div>
      <div className="Menu">
        <a onClick={handleLogout} className="Button" to="">
          Log out
        </a> 
      </div>
    </div>
  );
};

export default NavbarHome;
