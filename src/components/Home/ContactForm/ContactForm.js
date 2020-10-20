import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = () => {
  const history = useHistory();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
    emailError: "",
  });
  const handleOnChange = (e) => {
    e.preventDefault();
    const newInfo = { ...formInfo };
    if (e.target.name !== "email") {
      newInfo[e.target.name] = e.target.value;
    }
    if (e.target.name === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = regexEmail.test(e.target.value);
      if (result) {
        newInfo.email = e.target.value;
        newInfo.emailError = "";
      }
      if (!result) {
        newInfo.emailError = "plase isert correct email";
        newInfo.email = "";
      }
    }
    setFormInfo(newInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formInfo;
    if (name && email && message) {
      const finalResult = { name, email, message };
      fetch("https://damp-ridge-35487.herokuapp.com/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalResult),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            alert("form submit successfully");
            history.push("/");
          }
        });
    }
  };
  return (
    <div
      style={{ backgroundColor: "#FBD062" }}
      className="align-items-start row mt-5 p-5"
    >
      <div className="col-md-6 p-5 text-center">
        <h1 style={{ color: "#2D2D2D", marginBottom: "30px" }}>
          Let us handle your <br /> Project,profetionally
        </h1>
        <p>
          With well written codes, we build amazing apps for all <br />{" "}
          platforms, mobile and web apps in general
        </p>
      </div>
      <div className="col-md-6 p-5">
        <form onSubmit={handleSubmit} className="contact-form" action="">
          <input
            name="email"
            onChange={handleOnChange}
            type="text"
            placeholder="Your email address"
          />
          <br />
          {formInfo.emailError && (
            <p style={{ color: "red" }}>Please give an valid email</p>
          )}
          <input
            name="name"
            onChange={handleOnChange}
            type="text"
            placeholder="Your name/company name"
          />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleOnChange}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn btn-brand">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
