import React from "react";
import "./Footer.css";
import instagram from "../Components/img/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="margin-correction">
        Thank you for watching this, Please check the more templates which is
        given in next folder. For any queries contact me.
      </p>
      <p className="margin-correction">#React-0-to-Hero By DP Shetty.</p>
      <span>
        <img src={instagram} alt="" />
        <p>shetty_dp </p>
      </span>
    </div>
  );
};

export default Footer;
