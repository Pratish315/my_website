import React from "react";
import HireCallMeStyle from './HireCallMe.module.css'

const HireCallMe = () =>{
    return (
        <div className = {HireCallMeStyle.hire_call}>
            <a href="mailto:pdullabh315@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className={"btn btn-primary " + HireCallMeStyle.hire_call} ><strong>Hire Me</strong></button>
            </a>
            <br/>
            <br/>
            <a href="tel:+27-71-683-3908" target="_blank" rel="noopener noreferrer" >
                <button className={"btn btn-primary " + HireCallMeStyle.hire_call} > <strong>Call Me</strong> </button>
            </a>
        </div>
    )
}

export default HireCallMe