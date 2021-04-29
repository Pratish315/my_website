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
        Working as a Data Scientist has equipped me with the necessary skills to manage Big Data more easily and effectively. 
        My daily job entails solving business-problems using a combination of Statistics, Computer Science and Business knowledge to develop and deploy machine-learning/analytical models that are accurate and scalable. 
        <br></br>
        <br></br>
        I have experience with data pipelines, ETL processes, ML/Cloud Operations & DevOps - having my own models put into production using AWS EMR/EC2, Apache Hadoop, Apache Spark, BitBucket, and quite a few other tools. 
        Adopting Software Engineering Best Practices and an Agile-mindset throughout my job is very important.
      </p>
    </Auxillary>
  );
};
export default ServiceContentOne;
