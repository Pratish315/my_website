import React from "react";
import Auxillary from "../../../../../../hoc/Auxillary";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase } from "@fortawesome/free-solid-svg-icons";


const ServiceContentOne = () => {
  return (
    <Auxillary>
      <span>
        <FontAwesomeIcon icon={faDatabase} size = '2x' color = 'white' className ='sm-icons' />
      </span>
      <h5>Machine Learning Engineer</h5>
      <p>
        Working as a ML Engineer has equipped me with the necessary skills to manage and track machine learning lifecycles more easily and effectively. 
        Using a combination of statistics, computer science and business knowledge I have developed and deployed machine-learning/analytical models that are accurate and scalable. 
        <br></br>
        <br></br>
        I have experience with data ETL processes, ML/cloud operations, infrastructure & devops - having various models put into production using AWS EMR/EC2/Glue, Apache Airflow, MLflow etc.
        Adopting Software Engineering Best Practices and an Agile-mindset throughout my job is very important.
      </p>
    </Auxillary>
  );
};
export default ServiceContentOne;
