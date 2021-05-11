import React, { Component } from "react";
import ContactForm from "./Form/ContactForm";
import { Spring } from "react-spring";
import Classes from "./Contact.module.css";
import Header from "../Contact/Header/Header";
import Description from "../Contact/Description/Description"

class Contact extends Component {

  render() {
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 500 }}>
          {(props) => (
            <div className = {Classes.contact_full_container}>
            <div style={props} className={Classes.container}>
              <div className={Classes.content}>
                <Header />
                <Description />
                <div className={Classes.contact_form}>
                  <ContactForm />
                </div>
              </div>
            </div>
            </div>
          )}
        </Spring>
    );
  }
}

export default Contact;
