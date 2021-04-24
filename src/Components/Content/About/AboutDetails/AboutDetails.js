import React from "react";
import myimage from "./arun.JPG";
import "./AboutDetails.css";
import Header from "./Header/Header";

const AboutDetails = () => {
  return (
    <div>
      <Header />
      <div className = "about-details">
        <div className = "about-details-myimage">
          <a href={myimage}>
            <img src={myimage} alt="Pratish Dullabh" width='500' height='450'/>
          </a>
        </div>
        <div className = "about-details-mydetails">
          <h2>
            Description:
          </h2>
          <p>
          Since a young boy I was fascinated about computers and how they work. Computers is what I do, and I do what I love, every single day! I am continuously driven
          to solve problems, whilst simultaneously expanding my existing knowledge. For me, it is a privilege to be given the opportunity
          to do this within my employer's environment.
          <br></br>
          <br></br>
          I am always curious to learn more from others and develop strong relationships with co-workers.
          I am an extremely disciplined individual, with good time-management/punctual skills. I understand that failure is part of life, but I will always get back
          up and better myself. I would consider myself as an honest hard-working individual who is grateful for where he is. I will never become stagnant, and I will
          always aim higher because that is what was installed in me as a child.
          I thoroughly enjoy spending time with family and loved ones. 
          Other hobbies of mine include exercising, eating good food, playing soccer/cricket,
          gaming, travelling and finally - coding!
          </p>
        </div>
      </div>
      </div>
  );
};
export default AboutDetails;
