import React from "react";
import Particles from "./Particles/Particles";
import Auxillary from "../../../hoc/Auxillary";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons"
import HomeStyle from "./Home.module.css";
import HireCallMe from "./HireCallMe/HireCallMe";
import Title from "./Title/Title";

const home = () => {
  return (
    <Auxillary>
      <Particles />
      <div className = {HomeStyle.container}>
        <div className ={HomeStyle.box}>
          <div className ={HomeStyle.content}>
            <Title />
            <div className = {HomeStyle.social_media_icons}>
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