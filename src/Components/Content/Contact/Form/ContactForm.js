import React from "react";
import Classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const formStyle = "form-control" + " " + Classes.input;

  return (
    <form method="post" /*onSubmit={props.handleSubmit}*/>
      <div className="form-group">
        <label>Enter Your Name</label>
        <input
          type="text"
          className={formStyle}
          name="name"
          /*onChange={props.handleChange}*/
          placeholder="Enter your name here"
        />
        <span style={{ color: "red" }}>nameerrorsubmit</span>
        <span style={{ color: "red" }}>nameerrorfocus</span>
      </div>
      <div className="form-group">
        <label>Enter Your Email</label>
        <input
          type="text"
          className={formStyle}
          name="email"
          /*onChange={props.handleChange}*/
          placeholder="Enter your email address here"
        />
        <span style={{ color: "red" }}>emailerrorsubmit</span>
        <span style={{ color: "red" }}>emailerrorfocus</span>
      </div>
      <div className="form-group">
        <label>Enter Your Number</label>
        <input
          type="text"
          className={formStyle}
          name="phone"
          /*onChange={props.handleChange}*/
          placeholder="Enter your mobile number here"
        />
        <span style={{ color: "red" }}>phoneerrorsubmit</span>
        <span style={{ color: "red" }}>phoneerrorfocus</span>
      </div>
      {props.buttondisabled}
    </form>
  );
};
export default ContactForm;
