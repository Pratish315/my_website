import React from "react";
import Auxillary from "../../../../hoc/Auxillary";

const education = () => {
  return (
    <Auxillary>
      <span>
        <i className="fas fa-graduation-cap"></i>
      </span>
      <h5>Education</h5>
      <h6>University of Cape Town (Cape Town, South Africa):</h6>
      <h6>January 2019 – April 2020</h6>
      <p>-  Honours in B.Sc. Computer Science, GPA: 77</p>
      <h6>February 2016 - November 2018</h6>
      <p>-	B.Sc. Computer Science and Business Computing</p>
      <h6>Fairbairn College (Cape Town, South Africa, February 2011 – November 2015)</h6>

      <span>
        <i className="fas fa-graduation-cap"></i>
      </span>
      <h5>Acedemic Projects</h5>
      <h6>AutoStar: SEMI-AUTOMATED DATA WAREHOUSE CONSTRUCTION</h6>
      <p>-	This was my Honours project; I worked in a team of 2 and I was responsible for semi-automatically creating a star-schema from differently structured source repositories.</p>
      <p>-	Java was the core language used for this project. I used it to semi-automatically develop the star-schema from both SQL and MongoDB databases. I also defined the ETL process by scripting the entire data pipeline from the source repository to the warehouse containing the generated star-schema.</p>
      <h6>Bid4Cows: an auctioning web application</h6>
      <p>-	This was my Capstone project; our team built a dynamic web application that allows users to buy and sell their cattle in an auction-based environment. </p>
      <p>-	I worked in a team of 3, I was responsible for the backend and the tools I used were Java, JavaServer Pages, JDBC and SQL.</p>
      <h6>Survival: a 2D 1-Player game + Tetris</h6>
      <p>-	I created my own top-down shooter game and Tetris from scratch using Java and LibGDX.</p>
      <p>-	For the top-down shooter game I added in basic AI using A* pathfinding. </p>
    </Auxillary>
    
  );
};
export default education;
