import React from "react";
import myimage from "../../../../../assets/me.JPG";
import AboutDetailsStyle from "./AboutDetails.module.css";
import Header from "./Header/Header";
import Tilt from 'react-parallax-tilt';

const AboutDetails = () => {
  return (
    <div>
      <Header />
      <div className = {AboutDetailsStyle.about_details}>
        
        <div className = {AboutDetailsStyle.about_details_myimage}  >
          <a href={myimage}>
            <Tilt>
            <img src={myimage} alt="Pratish Dullabh" />
            </Tilt>
          </a>
        </div>
        
        <div className = {AboutDetailsStyle.about_details_mydetails}>
          <h2>
            Description:
          </h2>
          <p>
          Since a young boy I was fascinated with computers and how they work. Computers is what I do, and I do what I love, every single day! I am continuously driven
          to solve problems, whilst simultaneously expanding my knowledge. For me, it is a privilege to be given the opportunity
          to do this within my employer's environment.
          <br></br>
          <br></br>
          I am always curious to learn more from others and develop strong relationships with co-workers.
          I am an extremely disciplined individual, with good time-management/punctual skills. I understand that failure is part of life, but I will always get back
          up and better myself. I am a honest & hard-working individual, and I am grateful for where I am today. However, I will never become stagnant, and I will
          always aim higher and continue learning because that is what was installed in me as a child.
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
