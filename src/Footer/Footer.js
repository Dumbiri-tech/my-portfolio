import React from "react";
import "./Footer.css";
import footerImg from "../images/sam-logo.jpg";
import userIcon from "../icons/icon.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={footerImg}
            alt=""
            style={{ width: "50px", borderRadius: "100%" }}
          />
          <p>
            {" "}
            I am a front developer and i have worked on so many project and i
            also been on so may joint web3 projects.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" style={{ width: "25px" }} />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="footer-buttom-left">
          @ 2024 Dumbiri Samuel. All rights rederved
        </p>
        <div className="footer-buttom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
