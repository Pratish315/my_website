import React from "react";
import Header from "./Header/Header";
import Contents from "./Content/Contents";
import Auxillary from "../../../hoc/Auxillary";
import "./Services.css";

const service = () => {
  return (
    <Auxillary>
      <div className="services-services">
        <Header />
        <Contents />
      </div>
    </Auxillary>
  );
};
export default service;
