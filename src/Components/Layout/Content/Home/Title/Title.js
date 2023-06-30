import React from "react";
import Typed from "react-typed";
import TitleStyle from "./Title.module.css"

const Title = () =>{
    return (
        <div className = {TitleStyle.title}>
            <h1>
            Hi, I am <br/><span className = {TitleStyle.myname}><b>Pratish Dullabh</b></span>
            </h1>
            <Typed 
            style = {{"color" : "rgb(233, 27, 199)", "fontSize" : "30px"}}
            strings={["Machine Learning Engineering", "Data Science", "Web Development", "Software Engineering", "Data Engineering", "Dev-Ops"]}
            typeSpeed={40}
            backSpeed={50}
            className = "typedcursor"
            loop
            ></Typed>
        </div>
    )
}

export default Title