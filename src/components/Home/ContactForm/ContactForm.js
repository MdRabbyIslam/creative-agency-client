import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
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
            value=""
            onChange={handleOnChange}
            type="text"
            placeholder="Your email address"
          />
          <br />
          <input
            name="name"
            value=""
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
