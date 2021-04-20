import React from "react";
import "./SideBar.css";
import Button from "./Button/Button"
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Menu from "./Menu/Menu";
import BackgroundGenerator from "./BackgroundGenerator/BackgroundGenerator";



const Sidebar = (props) => {
    
    /* style of sidebar depends on whether its opened or not */
    const sideBarStyle = props.isSideBarOpened ? "Opensidebar" : "Closesidebar"

    /* variables for background generator */
    const [color, setColor] = React.useState("#C5C1C1");
    const [color2, setColor2] = React.useState("#111111");

    /* sideBarStyle is applied to all components in the nav */
    return (
        <nav className = {"sidebar " + sideBarStyle} style = {{background: "linear-gradient(to right, "+color+", "+color2+")"}}>
            <Button isSideBarOpened={props.isSideBarOpened} clicked={props.clicked} />
            <ProfilePicture />
            <Menu clicked={props.clicked} />
            <BackgroundGenerator color = {color} color2 = {color2} setColor = {setColor} setColor2 = {setColor2}/>
        </nav>
    );

};

export default Sidebar;