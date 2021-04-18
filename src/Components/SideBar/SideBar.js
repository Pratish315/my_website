import React from "react";
import './SideBar.css';
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import HLine from "../HLine/HLine";

const SideBar = () =>{
    return (
        <div className ='grid-sidebar sidebar' >

            <div className = "style">
                <ProfilePicture />
            </div>

            <div >
                3
            </div>

        </div>
    )
}

export default SideBar