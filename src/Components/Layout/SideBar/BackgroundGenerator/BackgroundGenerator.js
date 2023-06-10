import React from "react";
import BackgroundGeneratorStyle from "./BackgroundGenerator.module.css";

const BackgroundGenerator = (props) => {

    
    return (

        <div className = {BackgroundGeneratorStyle.bg}>
            <p className = {BackgroundGeneratorStyle.backgroundGenText}>CHOOSE YOUR 2 FAVOURITE COLOURS BELOW!</p> 
            <div>
            <input className = {BackgroundGeneratorStyle.input_colour} type="color" value={props.color} onChange={e => props.setColor(e.target.value)} />
            <input className = {BackgroundGeneratorStyle.input_colour} type="color" value={props.color2} onChange={e => props.setColor2(e.target.value)} />
            </div>
        </div>
    );

};

export default BackgroundGenerator;

