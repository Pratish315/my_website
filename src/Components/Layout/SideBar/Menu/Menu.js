  
import React, { Component } from "react";
import MenuStyle from "./Menu.module.css";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  state = {
    menu: [
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "About", path: "/about" },
      { id: 3, name: "Resume", path: "/resume" },
      { id: 4, name: "Projects", path: "/projects" },
      { id: 5, name: "Contact", path: "/contact" },
    ],
  };
  render() {
    return (
      <ul className={MenuStyle.list}>
        {this.state.menu.map((menuItem) => {
          return (
            <li key={menuItem.id}>
              <NavLink onClick={this.props.clicked} exact to={menuItem.path} activeClassName={MenuStyle.active}>
                {menuItem.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;