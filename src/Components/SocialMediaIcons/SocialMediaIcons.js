import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css'

const SocialMediaIcons = () =>{
    return (
        <div >

            <a href="https://www.linkedin.com/in/arun-singh1999/" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faFacebook} size = '3x' color = 'black' className ='sm-icons' />
            </a>
            <a href="https://github.com/arunsinghsnd/" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faGithub} size = '3x' color = 'black' className ='sm-icons' />
            </a>
            <a href="https://www.instagram.com/arun.singh.999/"rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faInstagram} size = '3x' color = 'black' className ='sm-icons' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011125293678&ref=bookmarks" rel="noopener noreferrer"  target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size = '3x' color = 'black' className ='sm-icons' />
            </a>

        </div>
    )
}

export default SocialMediaIcons