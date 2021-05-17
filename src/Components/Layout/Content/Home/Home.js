import React from "react";
import Particles from "./Particles/Particles";
import Auxillary from "../../../hoc/Auxillary";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons"
import "./Home.css";
import HireCallMe from "./HireCallMe/HireCallMe";
import Title from "./Title/Title";

const home = () => {
  return (
    <Auxillary>
      <Particles />
      <div className = "container">
        <div className ="box">
          <div className ="content">
            <Title />
            <div className = "social_media_icons">
              <SocialMediaIcons />
            </div>
            <HireCallMe />
          </div>
        </div>
      </div>
    </Auxillary>
  );
};
export default home;