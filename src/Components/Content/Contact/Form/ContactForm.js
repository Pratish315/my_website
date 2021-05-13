import React from "react";
import Classes from "./ContactForm.module.css";

const ContactForm = (props) => {

  return (
    <form method="post" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label className = {Classes.label_astrix}>Enter Your Name</label>
        <input
          type="text"
          className={"form-control " + Classes.input }
          name="name"
          onChange={props.handleChange}
          placeholder="Enter your name here "
        />
      </div>
      <div className="form-group">
        <label className = {Classes.label_astrix}>Enter Your Email</label>
        <input
          type="text"
          className={"form-control " + Classes.input }
          name="email"
          onChange={props.handleChange}
          placeholder="Enter your email address here "
        />
        <span style={{ color: "red" }}>{props.errors.emailError}</span>
      </div>
      <div className="form-group">
        <label>Enter Your Number</label>
        <input
          type="number"
          className={"form-control " + Classes.input }
          name="phone"
          onChange={props.handleChange}
          placeholder="Enter your mobile number here: +27 81 633 7129"
        />
      </div>
      <div className="form-group">
        <label>Enter Your Message</label>
        <textarea onChange={props.handleChange} className={"form-control " + Classes.input } name="message"  placeholder="Enter your message here" cols="50" rows="5"></textarea>
      </div>
      <div className = {Classes.submitButton}>
      {props.submitButton}
      </div>      
      <span style={{ color: "red", marginLeft : "15px" }}>{props.mainError}</span>
    </form>
  );
};
export default ContactForm;
