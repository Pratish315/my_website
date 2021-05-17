import React from "react";
import './ProfilePicture.css'
import profilePic from '../../../../assets/profilePic.PNG';


const ProfilePicture = () =>{
    return (
            <div className = "profile">
                <img alt = 'profile_pic' src = {profilePic}/>
            </div>
    )
}

export default ProfilePicture