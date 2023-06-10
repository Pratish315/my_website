import React, { Component } from "react";
import Classes from "./ProjectDetails.module.css";
import img1 from "../../../../../assets/facialRec.png";
import img2 from "../../../../../assets/roboHooks.png";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          img: img1,
          alt: "Facial Recognition",
          topic: "Facial Recognition",
          description: "To familiarize myself with React, I created this facial recognition webapp using PostgreSQL, ExpressJS & Clarifai's API and deployed it on Heroku.",
          codeLink: "https://github.com/Pratish315/facial-recognition-static-frontend",
          liveLink: "https://pratish315.github.io/facial-recognition-static-frontend/"
        },
        {
          id: 2,
          img: img2,
          alt: "Robo Friends",
          topic: "Robo-Friends",
          description: "During my free time I created this basic webapp to familarize myself with React Hooks.",
          codeLink: "https://github.com/Pratish315/robofriends-hooks",
          liveLink: "https://pratish315.github.io/robofriends-hooks/"
        },
      ],
    };
  }
  render() {
    return (
      <div className={Classes.content}>
        {this.state.projects.map((project) => {
          return (
            <div key={project.id} className={Classes.box}>
              <span className={Classes.topic}>
                <span>{project.topic} 
                <br></br>
                <p>{project.description} </p>
                </span>
              </span>
              <img src={project.img} alt={project.alt}  />
              <a href={project.liveLink} rel="noopener noreferrer"  target="_blank" >
                <button className={Classes.githubbut} >View live</button>
              </a>
              <a href={project.codeLink} rel="noopener noreferrer"  target="_blank">
                <button className={Classes.githubbut} >View code on Github</button>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Project;
