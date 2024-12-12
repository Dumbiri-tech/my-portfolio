import React from "react";
import "./Hero.css";
import logo from "../images/sam-logo.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={logo}
        alt="profile_img"
        style={{ width: "180px", height: "180px", borderRadius: "100px" }}
      />
      <h1>
        <span>I'm Samuel Dumbiri,</span> frontend/blockchain developer based in
        Nigeria.
      </h1>
      <p>
        I am a front developer and i have worked on so many project and i also
        been on so may joint web3 projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
