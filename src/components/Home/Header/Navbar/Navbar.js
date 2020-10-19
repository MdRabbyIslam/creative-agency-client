import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logos/logo.png";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img className="logo-brand" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <Link className="link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="#">
                Our Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="#">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="link btn-brand px-4 text-white" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
