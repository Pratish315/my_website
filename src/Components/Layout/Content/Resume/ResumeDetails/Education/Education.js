import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGraduationCap, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const education = () => {
  return (
    <Auxillary>
      <FontAwesomeIcon icon={faGraduationCap} size = '2x' color = 'white'/>
      <h4>Education</h4>
      <h5>University of Cape Town (Cape Town, South Africa):</h5>
      <h6>January 2019 – April 2020</h6>
      <p>Honours in B.Sc. Computer Science, GPA: 77</p>
      <h6>February 2016 - November 2018</h6>
      <p>B.Sc. Computer Science and Business Computing</p>
      <h6 style = {{ paddingBottom : "7%"}}>Fairbairn College (Cape Town, South Africa, February 2011 – November 2015)</h6>

      <FontAwesomeIcon icon={faProjectDiagram} size = '2x' color = 'white'/>
      <h4>Acedemic Projects</h4>
      <h6>AutoStar: SEMI-AUTOMATED DATA WAREHOUSE CONSTRUCTION</h6>
      <p>This was my Honours project; I worked in a team of 2 and I was responsible for semi-automatically generating a star-schema from relational and NoSQL databases.</p>
      <p>I used Java, defined the ETL process and scripted the data pipeline from the source databases to the warehouse containing the generated star-schema.</p>
      <h6>Bid4Cows: an auctioning web application</h6>
      <p>I worked in a team of 3, I was responsible for building and testing the backend. The tools I used were Java, JSP, JDBC and SQL. </p>
      <h6>Survival: a 2D 1-Player game / Tetris</h6>
      <p>I created my own top-down shooter game and Tetris from scratch using Java and LibGDX.</p>
      <p>For the top-down shooter game I added in basic AI using A* pathfinding. </p>
    </Auxillary>
    
  );
};
export default education;
