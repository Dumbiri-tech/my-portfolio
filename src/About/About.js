import React from "react";
import "./About.css";
import my_image from "../images/sam-pic.jpg";
// import splash from "../images/splash.PNG";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About me</h2>
        {/* <img src={splash} alt="" style={{ width: "130px" }} /> */}
        <p className="splash">💦</p>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            src={my_image}
            alt=""
            style={{ width: "270px", borderRadius: "10px" }}
          />{" "}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am a front developer and i have worked on so many project and i
              also been on so may joint web3 projects.
            </p>
            <p>
              {" "}
              I am a front developer and i have worked on so many project and i
              also been on so may joint web3 projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>TAILWIND</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>10+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>90+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>15+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
