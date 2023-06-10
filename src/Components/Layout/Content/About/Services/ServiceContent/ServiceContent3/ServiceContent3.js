import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Auxillary from "../../../../../../hoc/Auxillary";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ServiceContentThree = () => {
  return (
    <Auxillary>
      <span>
      <FontAwesomeIcon icon={faDesktop} size = '2x' color = 'white' className ='sm-icons' />
      </span>
      <h5>Software Engineer</h5>
      <p>
        Studying Computer Science has provided me with a great amount of insight on the roles that data structures, 
        algorithms, and time complexities serve in problem-solving and software development. I also have past work-experience in the fields of CE, CI, and CD.
        Having Java/Python as my preferred languages, I have the ability and resilience to troubleshoot and debug software issues from large codebases in these languages.
        <br></br>
        <br></br>
        Working closely with clients, planning & analyzing their requirements, creating clear but technical documentation, and developing easy-to-read 
        code with comments is what I am good at. 
        I have the capacity to work closely with other individuals/teams, research, create, test, deploy and maintain software programs.

      </p>
    </Auxillary>
  );
};
export default ServiceContentThree;
