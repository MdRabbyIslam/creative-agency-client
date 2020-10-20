import React from "react";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from "../../images/logos/logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import loginLogo from "../../images/icons/google-login-logg.png";
import firebaseConfig from "./firbase.config";

import { useState, useEffect } from "react";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [adminEmail, setAdminEmail] = useState([]);

  useEffect(() => {
    fetch("https://damp-ridge-35487.herokuapp.com/admins")
      .then((res) => res.json())
      .then((data) => {
        setAdminEmail(data);
      });
  }, []);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  const handleLogIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const { displayName, photoURL, email } = user;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("name", displayName);
        sessionStorage.setItem("photo", photoURL);
        sessionStorage.setItem("adminOrUser", testAdminOrUser(email));
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };
  const testAdminOrUser = (email) => {
    const isAdmin = adminEmail.find((findEmail) => findEmail.email === email);
    if (isAdmin) return "admin";
    if (!isAdmin) return "user";
  };

  return (
    <div className="login-container">
      <div className="img-container pt-5">
        <img className="logo-brand" src={logo} alt="" />
      </div>
      <div className="login-div-container">
        <h4>Login With</h4>
        <button className="login-btn text-center " onClick={handleLogIn}>
          <img
            style={{ width: "35px", height: "35px" }}
            src={loginLogo}
            alt=""
          />
          <span className="text-end">continue with google</span>
        </button>
        <p>
          Don't have an account?
          <Link to="#">create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
