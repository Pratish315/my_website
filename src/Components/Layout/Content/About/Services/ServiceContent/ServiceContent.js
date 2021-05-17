import React from "react";
import ServiceContentOne from "./ServiceContent1/ServiceContent1";
import ServiceContentTwo from "./ServiceContent2/ServiceContent2";
import ServiceContentThree from "./ServiceContent3/ServiceContent3";
import "./ServiceContent.css";

const ServiceContent = () => {
  return (
    <div className="services">
      <div className="services-box">
        <div className="services-content">
          <ServiceContentOne />
        </div>
      </div>
      <div className="services-box">
        <div className="services-content">
          <ServiceContentTwo />
        </div>
      </div>
      <div className="services-box">
        <div className="services-content">
          <ServiceContentThree />
        </div>
      </div>
    </div>
  );
};
export default ServiceContent;
