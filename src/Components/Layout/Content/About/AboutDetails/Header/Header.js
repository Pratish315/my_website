import React from "react";
import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <div className = {HeaderStyle.about_header}>
      <h2>About</h2>
      <span>About Me</span>
    </div>
  );
};
export default Header;
