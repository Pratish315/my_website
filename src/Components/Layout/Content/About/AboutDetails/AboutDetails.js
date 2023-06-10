import React from "react";
import myimage from "../../../../../assets/me.jpeg";
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
          <br />
          <br />
          I am currently working as a Data Scientist at ShopriteX, with over 2 years of experience in Big Data, Data Science, Software Engineering, Data Engineering and Dev-Ops.
          <br />
          <br />        
          My passion is full-stack software development and I am enthusiastic about machine learning, artificial intelligence and autonomous operations.
          I am always curious to learn from others and develop strong relationships with co-workers. I am a flexible team player that prospers in a fast-paced environment. I thoroughly enjoy spending time with family and friends. Other hobbies of mine include going to the gym, indulging in gourmet foods, playing soccer/cricket, gaming, travelling and finally… coding!
          </p>
        </div>
      </div>
      </div>
  );
};
export default AboutDetails;
