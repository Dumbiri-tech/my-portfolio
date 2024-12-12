import React from "react";
import "./Services.css";
// import splash from "../images/splash.PNG";
import ServiceData from "../service-data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h2>My Services</h2>
        {/* <img src={splash} alt="" style={{ width: "130px" }} /> */}
        <p className="splash">💦</p>
      </div>
      <div className="services-container">
        {ServiceData.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.no}</h3>
              <h2>{service.name}</h2>
              <p>{service.desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <p>➡️</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
