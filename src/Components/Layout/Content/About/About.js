import React from "react";
import AboutDetails from "./AboutDetails/AboutDetails";
import Services from "./Services/Services";
import { Spring } from "react-spring";
import AboutStyle from "./About.module.css";

const About = () => {
  return (
    <div className = {AboutStyle.about_full_container}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 500 }}>
      {(props) => (
        <div style={props} className={AboutStyle.about_container}>
          <div className={AboutStyle.about_content}>
            <AboutDetails />
            <Services />
          </div>
        </div>
      )}
    </Spring>
    </div>
  );
};
export default About;
