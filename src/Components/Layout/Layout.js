import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Auxillary from "../hoc/Auxillary";
import Home from "../Content/Home/Home";
import About from "../Content/About/About"

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my_website" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>  
      </Auxillary>               
    );
  }

}

export default Layout;