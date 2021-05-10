import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import Auxillary from "../../../../hoc/Auxillary";

const expertise = () => {
  return (
    <Auxillary>
      <FontAwesomeIcon icon={faShieldAlt} size = '2x' color = 'white'/>
      <h5>Work Experience</h5>
      <h6>Data Scientist, Shoprite Holdings (Cape Town, SA: Jan. 01, 2021 – Present)</h6>
      <p>I was responsible for developing a hybrid-recommendation-engine for the business.
      The engine consisted of 6 different ALS models each trained on various levels.
      Business stakeholders were happy with the results and felt that the solution offered additional value.  
      The models were successfully put into production and consumed internally and across digital channels.
      My role also included assisting with the configs to ensure the models were scalable in production.
      </p>
      <p>Another and more recent project of mine consisted of creating definitions for whether customers have churned or not from categories. 
      Having thousands of categories with each of them having their own lifecycle, I decided to generate dynamic definitions for each category using clustering. 
      The predictive aspect of this project involved developing a classification model to accurately predict the likelihood of a customer churning within a variable time frame from now. After demoing the results and achieving an accuracy of +-87%, clients were pleased, and the model was productionalized.
      </p>      
      <h6>Data Science Intern, Shoprite Holdings (Cape Town, SA: Feb. 03, 2020 – Dec. 31, 2020)</h6>
      <p>
      My first project involved forecasting the demand for articles at different branches. 
      Other projects for the year involved deriving meaningful clusters of customers, stores, and categories based on their price sensitivity. 
      I then presented the results of these models and its impact on the business to the respective clients and received good feedback.  
      </p>
    </Auxillary>
  );
};
export default expertise;
