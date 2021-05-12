import React, { Component } from "react";
import ContactForm from "./Form/ContactForm";
import { Spring } from "react-spring";
import Classes from "./Contact.module.css";
import Header from "../Contact/Header/Header";
import Description from "../Contact/Description/Description"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import fireBase from "./Firebase/Firebase"

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
      submitButton: (<button type="submit" className="btn btn-primary">Submit</button>),
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

    if (isValid === true) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      }; 
      
      fireBase.collection("Users").add(data).then((res) => {toast.success("Thank you for contacting me, I will get back to you soon :)", {position: toast.POSITION.BOTTOM_CENTER})}).catch((error) => {console.log(error)});
      this.setState({submitButton : (<button disabled type="submit" className="btn btn-primary">Submit</button>)})
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
                    submitButton = {this.state.submitButton}
                  />
                  <ToastContainer />
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
