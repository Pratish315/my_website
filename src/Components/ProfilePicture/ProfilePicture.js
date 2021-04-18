import React from "react";
import './ProfilePicture.css'
import profilePic from './profilePic.jpg';
import Tilt from 'react-tilt';

const ProfilePicture = () =>{
    return (
        <img className = "profilePic" alt = 'profile_pic' src = {profilePic}/>

    )
}

export default ProfilePicture