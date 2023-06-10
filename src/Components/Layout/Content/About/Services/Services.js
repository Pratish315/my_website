import React from "react";
import Header from "./Header/Header";
import ServiceContent from "./ServiceContent/ServiceContent";
import Auxillary from "../../../../hoc/Auxillary";
import "./Services.css";

const service = () => {
  return (
    <Auxillary>
      <div className="services-services">
        <Header />
        <ServiceContent />
      </div>
    </Auxillary>
  );
};
export default service;
