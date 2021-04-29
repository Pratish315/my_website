import React from "react";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";
import Classes from "./ResumeDetails.module.css";

const content = () => {
  return (
    <div className={Classes.education_expertise}>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Education />
        </div>
      </div>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <WorkExperience />
        </div>
      </div>
    </div>
  );
};
export default content;
