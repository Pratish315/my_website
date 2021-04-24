import React from "react";
import Contentone from "./Content1/ContentOne";
import Contenttwo from "./Content2/ContentTwo";
import Contentthree from "./Content3/ContentThree";
import "./Contents.css";

const contents = () => {
  return (
    <div className="services">
      <div className="services-box">
        <div className="services-content">
          <Contentone />
        </div>
      </div>
      <div className="services-box">
        <div className="services-content">
          <Contenttwo />
        </div>
      </div>
      <div className="services-box">
        <div className="services-content">
          <Contentthree />
        </div>
      </div>
    </div>
  );
};
export default contents;
