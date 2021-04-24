import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase } from "@fortawesome/free-solid-svg-icons";


const ServiceContentOne = () => {
  return (
    <Auxillary>
      <span>
        <FontAwesomeIcon icon={faDatabase} size = '2x' color = 'white' className ='sm-icons' />
      </span>
      <h5>Data Scientist</h5>
      <p>
        Working as a Data Scientist has made managing Big Data more comfortable. I have been involved in ETL processes with hundreds of billions of records. 
        I can use Mathematics, Statistics, Computer Science, and the Business Context to develop and deploy statistical models that are accurate and can scale. 
        <br></br>
        <br></br>
        I have experience with Cloud Operations & DevOps - having my own models put into production using AWS, EMR/EC2, Lambda, spark, pandasUDF, BitBucket as well as other tools. 
        I have adopted an Agile-mindset and Software Engineering Best Practices through my job.
      </p>
    </Auxillary>
  );
};
export default ServiceContentOne;
