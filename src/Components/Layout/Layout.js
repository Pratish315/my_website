import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Auxillary from "../hoc/Auxillary";
import Home from "./Content/Home/Home";
import About from "./Content/About/About"
import Resume from "./Content/Resume/Resume";
import Projects from "./Content/Projects/Projects"
import Contact from "./Content/Contact/Contact";

class Layout extends Component {

  /* update isSideBarOpened */
  openSideBar = () => {
    this.setState({isSideBarOpened : !this.state.isSideBarOpened});
  };

  /* defining the states of our Layout */
  state = {
      isSideBarOpened: false,
  };

  /* rendering our layout */
  render() {
    return (  
      <Auxillary>
        <SideBar isSideBarOpened = {this.state.isSideBarOpened} clicked = {this.openSideBar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/my_website" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>  
      </Auxillary>               
    );
  }

}

export default Layout;