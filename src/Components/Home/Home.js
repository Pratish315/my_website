import React from "react";
import SideBar from "../SideBar/SideBar";
import Particles from "../Particles/Particles";
import './Home.css'

const Home = () =>{
    return (
        <div className = 'homeContainer'>

            <SideBar />
            <Particles />

        </div>
    )
}

export default Home