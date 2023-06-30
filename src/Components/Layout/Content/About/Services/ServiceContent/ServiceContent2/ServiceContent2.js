import React from "react";
import Auxillary from "../../../../../../hoc/Auxillary";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDev } from "@fortawesome/free-brands-svg-icons";

const ServiceContentTwo = () => {
  return (
    <Auxillary>
      <span>
        <FontAwesomeIcon icon={faDev} size = '2x' color = 'white' className ='sm-icons' />
      </span>
      <h5>Full-Stack Developer</h5>
      <p>
        I have experience in both Front End and Back End development. However, I am stronger in Back End development and I tend to enjoy it more.
        On the front-end, I am more familiar with React and for the backend I have mostly used Nginx and ExpressJS.
        I have good database management skills, having worked with both Relational and Non-Relational (NoSQL) databases. 
        <br></br>
        <br></br>
        I am familiar with Docker/Kubernetes and have used it to create a containerized React
        app which was scalable and deployed to Google Kubernetes Engine (GKE).
        Designing and developing and deploying working APIs, building client/server-side architecture, fixing bugs and testing software is also part of my skillset.
      </p>
    </Auxillary>
  );
};
export default ServiceContentTwo;
