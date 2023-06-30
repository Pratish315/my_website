import React, { Component } from "react";
import Auxillary from "../../../../hoc/Auxillary";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import Classes from "./Skills.module.css";

class Skills extends Component {
  state = {
    skills: [
      { id: 1, name: "PYTHON", percentage: 90},
      { id: 2, name: "JAVA", percentage: 90},
      { id: 13, name: "APACHE SPARK", percentage: 85},
      { id: 15, name: "TERRAFORM", percentage: 85},
      { id: 3, name: "SQL", percentage: 85},
      { id: 8, name: "AIRFLOW", percentage: 85},
      { id: 16, name: "MLFLOW", percentage: 85},
      { id: 16, name: "AZURE DEVOPS", percentage: 88},
      { id: 16, name: "DOCKER", percentage: 86},      
      { id: 9, name: "UNIX", percentage: 78},
      { id: 10, name: "HASKELL", percentage: 70},
      { id: 11, name: "AWS", percentage: 80},
      { id: 8, name: "GOOGLE CLOUD", percentage: 70},
      { id: 14, name: "KUBERNETES", percentage: 70},
      { id: 4, name: "HTML", percentage: 80},
      { id: 5, name: "CSS", percentage: 75},
      { id: 6, name: "REACT", percentage: 77},
      { id: 7, name: "JAVASCRIPT", percentage: 80},      
      { id: 8, name: "BLOCKCHAIN DEVELOPMENT", percentage: 70},
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
