import React from "react";
import "./Mywork.css";
import MyWorkData from "./MyWorkData";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h2>My latest work</h2>
        <p className="splash">💦</p>
      </div>
      <div className="mywork-container">
        {MyWorkData.map((work, index) => (
          <img key={index} src={work.img} alt="" />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <p>➡️</p>
      </div>
    </div>
  );
};

export default MyWork;
