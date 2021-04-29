import React from "react";
import AboutDetails from "./AboutDetails/AboutDetails";
import Services from "./Services/Services";
import { Spring } from "react-spring";
import "./About.css";

const About = () => {
  return (
    <div className = 'about-full-container'>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 500 }}>
      {(props) => (
        <div style={props} className="about-container">
          <div className="about-content">
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
