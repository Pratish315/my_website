import React from "react";
import ButtonStyle from "./Button.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {

    /* icon needs to change depending if sidebar is opened or not */
    const iconshape = props.isSideBarOpened ? faTimes : faBars;
    
    return (
        <button onClick={props.clicked} className={ButtonStyle.hamburger} style = {{background: "linear-gradient(to right, "+props.color+", "+props.color2+")"}}>
            <FontAwesomeIcon icon={iconshape} size = '1x' color = 'black' className ={ButtonStyle.button_style} />
        </button>
    );

};

export default Button;