import React, { Component } from "react";
import DescriptionStyle from "./Description.module.css"

class Contact extends Component {

  render() {
    return (
        <div className = {DescriptionStyle.style}>
            <p>Please enter your details & message below, and I will get back to you ASAP.</p>
        </div>
    );
  }
}

export default Contact;