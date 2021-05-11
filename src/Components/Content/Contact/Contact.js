import React, { Component } from "react";
import ContactForm from "./Form/ContactForm";
import { Spring } from "react-spring";
import Classes from "./Contact.module.css";
import Header from "../Contact/Header/Header";
import Description from "../Contact/Description/Description"
import FirebaseInstance from "./Firebase/FirebaseInstance"

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {
        emailError: "",
      },
      mainError: "",
    };
  }

/* ######################################################### */  
  handleChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const errors = this.state.errors;
  
    this.setState({[inputName]: inputValue});

    switch (inputName) {
      case "email":
        errors.emailError =
        !inputValue.endsWith('@') && !inputValue.endsWith('.') && inputValue.includes(".") && inputValue.includes("@")
          ? ""
          : "Please ensure that you have typed out your email address correctly.";
        break;       
      default:
        break;
    };

    if (!inputValue){
      errors.emailError = ""
    }

  }
/* ######################################################### */


/* ######################################################### */  
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email} = this.state;
    var isValid = false

    if ((name.trim() === "")) {
      this.setState({
        mainError: "Please enter a valid name.",
      });
    } else if ((email === "") || this.state.errors.emailError) {
      this.setState({
        mainError: "Please enter a valid email address.",
      });
    } else {
      this.setState({ mainError: "" });
      isValid = true;
    }    

    
    console.log(isValid)
    if (isValid === true) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      }; 
      FirebaseInstance.post("/contact.json", data)
  }

}
/* ######################################################### */



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
                  <ContactForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    errors = {this.state.errors}
                    mainError = {this.state.mainError}
                  />
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
