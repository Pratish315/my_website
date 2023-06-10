import React, { Component } from "react";
import ContactForm from "./Form/ContactForm";
import { Spring, animated } from "react-spring";
import Classes from "./Contact.module.css";
import Header from "../Contact/Header/Header";
import Description from "../Contact/Description/Description"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import 'animate.css';

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
      submitButton: <button className={"btn btn-primary"} type="submit" > Submit </button>
    };
  }

 


/* ######################################################### */  
  handleChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const errors = this.state.errors;
  
    this.setState({[inputName]: inputValue});
    if (this.state.mainError === "Your query was submitted successfully."){
      this.setState({ mainError: "" });
    }
    this.setState({submitButton : (<button className={"btn btn-primary"} type="submit" > Submit </button>)})

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
    
    this.setState({submitButton : (<button className={"btn btn-primary animate__animated animate__shakeX"} type="submit" > Submit </button>)})
    setTimeout(() => this.setState({submitButton : (<button className={"btn btn-primary"} type="submit" > Submit </button>)}), 500);

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
      this.setState({ mainError: "Your query was submitted successfully." });
      isValid = true;
    }    

    if (isValid === true) {
      
      toast.success("Thank you for contacting me, I will get back to you soon :)", { position: toast.POSITION.BOTTOM_CENTER });

      this.setState({submitButton : (<button className={"btn btn-primary animate__animated animate__shakeY"} type="submit" > Submit </button>)})
      setTimeout(() => this.setState({submitButton : (<button disabled className={"btn btn-primary"} type="submit" > Submit </button>)}), 500);
  
  }

}
/* ######################################################### */



  render() {

    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100, duration: 900 }}>
          {(props) => (
            <animated.div style={props} className = {Classes.contact_full_container}>
            <div className={Classes.container}>
              <div className={Classes.content}>
                <Header />
                <Description />
                <div className={Classes.ContactForm}>
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
            </animated.div>
          )}
        </Spring>
    );
  }
}

export default Contact;
