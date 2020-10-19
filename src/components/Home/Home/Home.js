import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import FeedBack from "../FeedBack/FeedBack/FeedBack";
// import FeedBack from "../FeedBack/FeedBack/FeedBack";
import Header from "../Header/Header/Header";
import Organization from "../Header/Organization/Organization";
import Serivices from "../Services/Services/Serivices";
import WorkCaurosel from "../WorkCaurosel/WorkCaurosel";

const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
    >
      <Header></Header>
      <Organization></Organization>
      <Serivices></Serivices>
      <WorkCaurosel></WorkCaurosel>
      <FeedBack></FeedBack>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
