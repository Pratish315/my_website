import React from "react";
import ServiceContentOne from "./ServiceContent1/ServiceContent1";
import ServiceContentTwo from "./ServiceContent2/ServiceContent2";
import ServiceContentThree from "./ServiceContent3/ServiceContent3";
import ServiceContentStyle from "./ServiceContent.module.css";

const ServiceContent = () => {
  return (
    <div className= {ServiceContentStyle.services}>
      <div className= {ServiceContentStyle.services_box}>
        <div className= {ServiceContentStyle.services_content}>
          <ServiceContentOne />
        </div>
      </div>
      <div className={ServiceContentStyle.services_box}>
        <div className={ServiceContentStyle.services_content}>
          <ServiceContentTwo />
        </div>
      </div>
      <div className={ServiceContentStyle.services_box}>
        <div className={ServiceContentStyle.services_content}>
          <ServiceContentThree />
        </div>
      </div>
    </div>
  );
};
export default ServiceContent;
