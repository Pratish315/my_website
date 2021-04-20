import React from "react";
import "./BackgroundGenerator.css";

const BackgroundGenerator = (props) => {

    
    return (
        <div className = "bg">
            <input className = "input-colour" type="color" value={props.color} onChange={e => props.setColor(e.target.value)} />
            <input className = "input-colour" type="color" value={props.color2} onChange={e => props.setColor2(e.target.value)} />
        </div>
    );

};

export default BackgroundGenerator;

