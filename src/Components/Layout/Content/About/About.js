import React from "react";
import AboutDetails from "./AboutDetails/AboutDetails";
import Services from "./Services/Services";
import { Spring, animated } from "react-spring";
import AboutStyle from "./About.module.css";

const About = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100, duration: 900 }}>
      {(props) => (
        <animated.div style={props} className = {AboutStyle.about_full_container}>
        <div className={AboutStyle.about_container}>
          <div className={AboutStyle.about_content}>
            <AboutDetails />
            <Services />
          </div>
        </div>
        </animated.div>
      )}
    </Spring>

  );
};
export default About;
