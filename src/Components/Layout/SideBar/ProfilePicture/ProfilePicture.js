import React from "react";
import ProfilePictureStyle from './ProfilePicture.module.css'
import profilePic from '../../../../assets/profilePic.PNG';


const ProfilePicture = () =>{
    return (
            <div className = {ProfilePictureStyle.profile}>
                <img alt = 'profile_pic' src = {profilePic}/>
            </div>
    )
}

export default ProfilePicture