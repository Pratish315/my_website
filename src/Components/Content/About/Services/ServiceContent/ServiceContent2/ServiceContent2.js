import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";
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
        I have experience in both Front End and Back End development of webapps, although I am stronger in Back End development and enjoy it more. I have worked with
        both relational and NoSQL databases and have created servers using NodeJS/ExpressJS.
        I can design a responsive UI, with fully functional databases and servers. 
        <br></br>
        <br></br>
        I am familiar with Docker/Kubernetes and have used it to create a containerized React
        app which was scalable and deployed to GKE.
        Designing and developing working APIs, building client/server-side architecture, fixing bugs and testing software is also part of my skillset.
      </p>
    </Auxillary>
  );
};
export default ServiceContentTwo;
