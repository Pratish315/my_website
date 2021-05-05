import React, { Component } from "react";
import Auxillary from "../../../hoc/Auxillary";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import Classes from "./Skills.module.css";

class Skills extends Component {
  state = {
    skills: [
      { id: 1, name: "JAVA", percentage: 99},
      { id: 2, name: "PYTHON", percentage: 98},
      { id: 3, name: "SQL", percentage: 80},
      { id: 4, name: "HTML", percentage: 85},
      { id: 5, name: "CSS", percentage: 85},
      { id: 6, name: "REACT", percentage: 70},
      { id: 7, name: "JAVASCRIPT", percentage: 75},
      { id: 8, name: "MONGODB", percentage: 75},
      { id: 9, name: "UNIX", percentage: 75},
      { id: 10, name: "HASKELL", percentage: 75},
      { id: 11, name: "Google Cloud / AWS", percentage: 75},
      { id: 12, name: "Machine-learning", percentage: 75},
      { id: 13, name: "APACHE SPARK", percentage: 75},
      { id: 14, name: "DOCKER & KUBERNETES", percentage: 75},
      { id: 15, name: "NODEJS", percentage: 75},
      { id: 16, name: "BIG DATA", percentage: 75},
    ],
  };
  render() {
    let skills = this.state.skills.map((skill) => {
      return (
        <div key={skill.id} className={Classes.box}>
          <div className={Classes.content}>
            <p>{skill.name}</p>
            <h6>{skill.percentage}%</h6>
            <Progress
              percent={skill.percentage}
              status="success"
              strokeWidth={3}
              className={Classes.back}
              symbolClassName={Classes.symbol}
              theme={{
                success: {
                  trailColor: "transparent",
                  color: "#037fff",
                },
              }}
            />
          </div>
        </div>
      );
    });
    return (
      <Auxillary>
        <div className={Classes.skills}>
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>
        <div className={Classes.skills_content}>{skills}</div>
      </Auxillary>
    );
  }
}

export default Skills;
