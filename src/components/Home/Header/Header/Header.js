import React from "react";
import "./Header.css";
import MainHeader from "../MainHeader/MainHeader";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      <MainHeader></MainHeader>
    </div>
  );
};

export default Header;
