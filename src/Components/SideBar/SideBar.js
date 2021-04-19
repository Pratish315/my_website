import React from "react";
import "./SideBar.css";
import Button from "./Button/Button"
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Menu from "./Menu/Menu";

const Sidebar = (props) => {
    
    /* style of sidebar depends on whether its opened or not */
    const sideBarStyle = props.isSideBarOpened ? "Opensidebar" : "Closesidebar"

    /* sideBarStyle is applied to all components in the nav */
    return (
        <nav className = {"sidebar " + sideBarStyle}>
            <Button isSideBarOpened={props.isSideBarOpened} clicked={props.clicked} />
            <ProfilePicture />
            <Menu clicked={props.clicked} />
        </nav>
    );

};

export default Sidebar;