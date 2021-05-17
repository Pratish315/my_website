import React from "react";
import Typed from "react-typed";
import "./Title.css"

const Title = () =>{
    return (
        <div className = "title">
            <h1>
            Hi, I am <br/><span className = "myname"><b>Pratish Dullabh</b></span>
            </h1>
            <Typed 
            style = {{"color" : "rgb(233, 27, 199)"}}
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