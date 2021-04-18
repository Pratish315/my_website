import React from "react";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import './Home.css'

const Home = () =>{
    return (
        <div className = 'homeContainer'>
            
            <SideBar />
            <MainSection />

        </div>
    )
}

export default Home