// import { faHandHolding } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./Order.css";

const Order = () => {
  const history = useHistory();
  const [userInfo] = useContext(UserContext);
  let [orderInfo, setOrderInfo] = useState({
    companyName: "",
    email: "",
    orderCatagory: userInfo.orderCatagory,
    price: "",
    file: "",
    companyNameError: "",
    emailError: "",
    priceError: "",
    name: "",
    status: "pending",
  });

  const validation = (target) => {
    const newInfo = { ...orderInfo };

    if (target.name === "companyName" || target.name === "orderCatagory") {
      if (target.value.length > 0) {
        newInfo[target.name] = target.value;
      }
      if (target.value.length < 1) {
        newInfo[`${target.name}Error`] = "please fill ";
      }
    }
    if (target.name === "price") {
      const regex = /^[-+]?[1-9]\d*$/;
      const result = regex.test(target.value);
      if (result) {
        newInfo.price = target.value;
        newInfo.priceError = "";
      }
      if (!result) {
        newInfo.price = "";
        newInfo.priceError = "pleae type only integer";
      }
    }

    if (target.name === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = regexEmail.test(target.value);
      if (result) {
        newInfo.email = target.value;
        newInfo.emailError = "";
      }
      if (!result) {
        newInfo.emailError = "plase isert correct email";
        newInfo.email = "";
      }
    }
    if (target.name === "file") {
      newInfo.file = target.files[0];
      newInfo.name = target.files[0].name;
    }
    setOrderInfo(newInfo);
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    validation(e.target);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const {
      status,
      name,
      email,
      price,
      file,
      companyName,
      orderCatagory,
    } = orderInfo;
    if (email && price) {
      //storing project photo to server
      const formData = new FormData();
      formData.append("file", file);
      fetch("https://damp-ridge-35487.herokuapp.com/uploadImg", {
        method: "POST",
        body: formData,
      });
      //storing data in database
      // const { description } = filterdData;
      console.log(name, orderCatagory, status);
      const finalResult = {
        companyName,
        price,
        email,
        orderCatagory,
        name,
        status,
      };
      console.log(finalResult);
      fetch("https://damp-ridge-35487.herokuapp.com/orderInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalResult),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) history.push("/");
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="order-form" action="">
        <div>
          <input
            onChange={handleOnChange}
            className="input-brand"
            name="companyName"
            placeholder="company's name, designation"
            type="text"
          />
        </div>

        <div>
          <input
            className="input-brand"
            onChange={handleOnChange}
            type="text"
            name="email"
            placeholder="your email address"
            required
          />
        </div>
        <p>{orderInfo.emailError}</p>
        <div>
          <input
            className="input-brand"
            onChange={handleOnChange}
            type="text"
            defaultValue={orderInfo.orderCatagory}
            name="OrderCatagory"
            placeholder="Grapics Design"
          />
        </div>
        <div className="project-div">
          <input
            onChange={handleOnChange}
            type="text"
            name="price"
            placeholder="price"
            required
          />
          <input
            required
            onChange={handleOnChange}
            type="file"
            name="file"
            id=""
          />
        </div>
        <p>{orderInfo.priceError}</p>

        <button
          className="btn btn-second px-5 text-white"
          style={{ backgroundColor: "green" }}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Order;
