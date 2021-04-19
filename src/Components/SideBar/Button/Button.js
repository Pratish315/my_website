import React from "react";
import "./Button.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {

    /* icon needs to change depending if sidebar is opened or not */
    const iconshape = props.isSideBarOpened ? faTimes : faBars;
    
    return (
        <button onClick={props.clicked} className="hamburger">
            <FontAwesomeIcon icon={iconshape} size = '1x' color = 'black' className ="button-style" />
        </button>
    );

};

export default Button;