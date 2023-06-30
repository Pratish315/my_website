import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";

const expertise = () => {
  return (
    <Auxillary>
      <FontAwesomeIcon icon={faShieldAlt} size = '2x' color = 'white'/>
      <h4>Work Experience</h4>
      <h6>Machine Learning Engineer, Shoprite Holdings (Cape Town, SA: Aug. 01, 2022 – Present)</h6>
      <p>
      My daily duties involve ensuring that all ML models are scalable, cost-effective, accurate, tracked, highly automated and that the value derived from them lands in the hands of the customer.  
      </p>
      <p>
      I Integrated the data from our personalisation engine (billions of records) into the company’s ERP system which enabled personalised communications through various channels. To achieve a scalable solution, I used spark and called an API concurrently through a pandasUDF function for batches of customers. 
      </p> 
      <p>
      I played a pivotal role in developing our team’s own set of Python utilities to interact with Airflow, MLflow, and various AWS services which are used for taking products to production. 
      </p>
      <p>
      I created CI/CD pipelines for various projects. This includes the necessary pre-commit and code testing checks, constructing build and release pipelines to deploy code and optimal infrastructure to different environments. This included end-to-end and scalability testing with job monitoring in place. 
      </p>                
      <h6>Data Scientist, Shoprite Holdings (Cape Town, SA: Jan. 01, 2021 – July. 31, 2022)</h6>
      <p>
      I played a crucial role in the development of collaborative-filtering, segmentation and customer churn models. 
      Business was pleased with the results, and they are used as an input for personalized deals sent to customers. 
      </p>
      <p>
      Furthermore, I served as a core developer in the creation of our company's personalisation engine, enhancing the customer experience and driving revenue growth. I was responsible for the job architecture, scalability, infrastructure and the build logic. 
      </p>                       
      <h6>Data Science Intern, Shoprite Holdings (Cape Town, SA: Feb. 03, 2020 – Dec. 31, 2020)</h6>
      <p>
      During my data science internship, I excelled in a Machine Learning competition, securing 1st place by accurately predicting product demand across multiple stores. 
      This experience showcased my skills in data analysis and modeling. 
      </p>
      <p>
      I gained valuable insights into different teams' processes and objectives, actively contributing to various projects. Collaborating with colleagues provided me with hands-on experience, further strengthening my expertise in the field. 
      </p>      
    </Auxillary>
  );
};
export default expertise;
