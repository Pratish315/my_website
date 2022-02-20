import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";

const expertise = () => {
  return (
    <Auxillary>
      <FontAwesomeIcon icon={faShieldAlt} size = '2x' color = 'white'/>
      <h5>Work Experience</h5>
      <h6>Data Scientist, Shoprite Holdings (Cape Town, SA: Jan. 01, 2021 – Present)</h6>
      <h7>Data Science - model development to drive customer personalisation: </h7>
      <p>Developed multiple collaborative-filtering model that would form part of the company’s
      recommendation engine. I showcased this to business and currently it serves as the primary input for
      personalised deals sent to customers.
      </p>
      <p>Another data science related project of mine consisted of creating definitions for whether customers
      have churned from categories. The predictive aspect of this project involved developing a classification
      model to accurately predict the likelihood of a customer churning within a variable time frame. After
      exhibiting the results and achieving an average yearly accuracy of +-85%, clients were pleased, and the
      model was consumed for gamification/rewards initiatives and offer-generation use cases.
      </p>  
      <h7>Data Engineering - data mart development for analytics: </h7>
      <p>Converted raw data into correctly grained data marts that housed a substantial amount of valuable
      customer insights and readily available features for ML models
      </p>  
      <h7>Dev-Ops - ETL and CI/CD pipeline creation for product automation: </h7>
      <p>Successfully developed and proposed enhanced production patterns to speed up service delivery.
      Through automating jobs and pushing them into production, 40 hours of manual work a week was
      eliminated and reliability for service delivery was increased.
      </p>       
      <h7>Software Engineering - design and develop scalable integration applications:
 </h7>
      <p>Integrated billions of records of data into the company’s ERP system. To achieve a scalable solution, I
      used spark and called an API concurrently through a pandasUDF function for batches of customers.
      </p>                        
      <h6>Data Science Intern, Shoprite Holdings (Cape Town, SA: Feb. 03, 2020 – Dec. 31, 2020)</h6>
      <p>
      During my internship year I participated in a Machine Learning competition amongst other data
      scientists to predict the demand of products at various branches, where I placed 1st.
      </p>
      <p>
      I was involved in acquiring audiences for targeted deals through data science, which yielded over 1 billion Rand in
      incremental sales within a year
      </p>      
    </Auxillary>
  );
};
export default expertise;
