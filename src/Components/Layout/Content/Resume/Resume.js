import React from "react";
import ResumeDetails from "./ResumeDetails/ResumeDetails";
import Skills from "./Skills/Skills";
import { Spring, animated } from "react-spring";
import Classes from "./Resume.module.css";
import mycv from "../../../../assets/CV-updated.pdf"

const resume = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 900 }} >
      {(props) => (
        <animated.div style={props} className = {Classes.resume_full_container}>
        <div className={Classes.container}>
          <div className={Classes.content}>
            <div className={Classes.resume}>
              <h2>Resume</h2>
              <span>My Resume</span>
            </div>
              <div className={Classes.downloadCV}>
                <a href={mycv} download>
                  <button className="btn btn-primary">DOWNLOAD MY FULL CV</button>
                </a>  
              </div>          
            <ResumeDetails />
            <Skills />
          </div>
        </div>
        </animated.div>
      )}
    </Spring>
  );
};
export default resume;
