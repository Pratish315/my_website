import React from "react";
import './ProfilePicture.css'
import profilePic from './profilePic.jpg';
import Tilt from 'react-tilt';

const ProfilePicture = () =>{
    return (
        
        <div >
            <Tilt className="Tilt " >
                <img className = "profilePic Tilt-inner" alt = 'profile_pic' src = {profilePic}/>
            </Tilt>
        </div>

    )
}

export default ProfilePicture