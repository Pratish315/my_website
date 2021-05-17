import React from "react";
import Project from "./ProjectDetails/ProjectDetails";
import { Spring, animated } from "react-spring";
import Classes from "./Projects.module.css";

const projects = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 900 }} >
      {(props) => (
      <animated.div style={props} className = {Classes.projects_full_container}> 
        <div className={Classes.container}>
          <div className={Classes.content}>
            <div className={Classes.projetcs}>
              <h2>Projects</h2>
              <span>My Projects</span>
            </div>
            <Project />
          </div>
        </div>
      </animated.div>
      )}
    </Spring>
  );
};
export default projects;
