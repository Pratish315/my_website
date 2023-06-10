import React from "react";
import Classes from "./ContactForm.module.css";

const ContactForm = (props) => {

  return (
    <form method="post" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <div>
          <label className = {Classes.label_astrix}>Enter Your Name</label>
        </div>
        <div>
          <input
            type="text"
            className={"form-control " + Classes.input }
            name="name"
            onChange={props.handleChange}
            placeholder="Enter your name here "
          />
        </div>
      </div>
      <div className="form-group">
        <div>
          <label className = {Classes.label_astrix}>Enter Your Email</label>
        </div>
        <div>
          <input
            type="text"
            className={"form-control " + Classes.input }
            name="email"
            onChange={props.handleChange}
            placeholder="Enter your email address here "
          />
        </div>
        <span style={{ color: "red" }}>{props.errors.emailError}</span>
      </div>
      <div className="form-group">
        <div>
          <label>Enter Your Number</label>
        </div>
        <div>
          <input
            type="number"
            className={"form-control " + Classes.input }
            name="phone"
            onChange={props.handleChange}
            placeholder="Enter your mobile number here: +27 81 633 7129"
          />
        </div>
      </div>
      <div className="form-group">
        <div>
          <label>Enter Your Message</label>
        </div>
        <div>
          <textarea onChange={props.handleChange} className={"form-control " + Classes.input } name="message"  placeholder="Enter your message here" cols="50" rows="5"></textarea>
        </div>
      </div>
      <div className = {Classes.submitButton}>
        {props.submitButton}
        <span style={{ color: props.mainError === "Your query was submitted successfully." ? "rgb(72, 255, 0)" : "Yellow", marginLeft : "20px" }}>{props.mainError}</span>
      </div>      
    </form>
  );
};
export default ContactForm;
