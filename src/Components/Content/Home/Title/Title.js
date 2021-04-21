import React from "react";
import Typed from "react-typed";
import "./Title.css"

const Title = () =>{
    return (
        <div className = "title">
            <h1>
            Hi, I am <br/><span>Pratish Dullabh</span>
            </h1>
            <Typed
            strings={["Data Scientist", "Full-Stack Developer", "Software Engineer"]}
            typeSpeed={40}
            backSpeed={50}
            className = "typedcursor"
            loop
            ></Typed>
        </div>
    )
}

export default Title