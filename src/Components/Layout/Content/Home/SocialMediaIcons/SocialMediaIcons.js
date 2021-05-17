import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css'
import Auxillary from "../../../../hoc/Auxillary"

const SocialMediaIcons = () =>{
    return (
        <Auxillary>
            <a href="https://www.facebook.com/pratish.dullabh/" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faFacebook} size = '3x' color = 'white' className ='sm-icons' />
            </a>
            <a href="https://github.com/pratish315/" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faGithub} size = '3x' color = 'white' className ='sm-icons' />
            </a>
            <a href="https://www.instagram.com/_pratish_d/"rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faInstagram} size = '3x' color = 'white' className ='sm-icons' />
            </a>
            <a href="https://www.linkedin.com/in/pratish-dullabh-200a64188/" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size = '3x' color = 'white' className ='sm-icons' />
            </a>
        </Auxillary>
    )
}

export default SocialMediaIcons