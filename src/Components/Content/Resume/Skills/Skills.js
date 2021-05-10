import React, { Component } from "react";
import Auxillary from "../../../hoc/Auxillary";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import Classes from "./Skills.module.css";

class Skills extends Component {
  state = {
    skills: [
      { id: 1, name: "JAVA", percentage: 85},
      { id: 2, name: "PYTHON", percentage: 80},
      { id: 3, name: "SQL", percentage: 83},
      { id: 4, name: "HTML", percentage: 80},
      { id: 5, name: "CSS", percentage: 75},
      { id: 6, name: "REACT", percentage: 77},
      { id: 7, name: "JAVASCRIPT", percentage: 80},
      { id: 8, name: "MONGODB", percentage: 80},
      { id: 9, name: "UNIX", percentage: 78},
      { id: 10, name: "HASKELL", percentage: 70},
      { id: 11, name: "Google Cloud / AWS", percentage: 80},
      { id: 12, name: "Machine-learning", percentage: 85},
      { id: 13, name: "APACHE SPARK", percentage: 80},
      { id: 14, name: "DOCKER & KUBERNETES", percentage: 80},
      { id: 15, name: "NODEJS", percentage: 79},
      { id: 16, name: "BIG DATA", percentage: 85},
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
