import React from "react";
import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <div className = {HeaderStyle.contact_header}>
      <h2>Contact</h2>
      <span>Get In Touch</span>
    </div>
  );
};
export default Header;
