import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

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
        <SideBar isSideBarOpened = {this.state.isSideBarOpened} clicked = {this.openSideBar} />
    );
  }

}

export default Layout;