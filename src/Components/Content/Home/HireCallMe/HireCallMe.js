import React from "react";
import './HireCallMe.css'

const HireCallMe = () =>{
    return (
        <div>
            <a href="mailto:pdullabh315@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary hire-call" ><strong>Hire Me</strong></button>
            </a>
            <br/>
            <br/>
            <a href="tel:+27-71-683-3908" target="_blank" rel="noopener noreferrer" >
                <button className="btn btn-primary hire-call" > <strong>Call Me</strong> </button>
            </a>
        </div>
    )
}

export default HireCallMe