import React from "react";
import "./Header.css";
import Button from "../Components/Button/Button";
import logo from "../Components/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" className="animated-logo" />
        <div className="header-polygon">
          <div className="header-content">
            <h1>
              <span className="header-title span-1">WELCOME 2</span>
              <span className="header-title span-2">REACT-0-to-HERO </span>
            </h1>
            <Button className="white-button button-fadeup">CLICK Here</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
