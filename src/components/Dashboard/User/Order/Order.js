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
  const [filterdData, setFilteredData] = useState();
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

  useEffect(() => {
    fetch("http://localhost:5000/gettingAddService/")
      .then((res) => res.json())
      .then((data) => {
        rabby(data);
      });
  }, []);

  const rabby = (data) => {
    console.log(data);
    const filterd = data.filter(
      (single) => single.title === userInfo.orderCatagory
    );
    setFilteredData(filterd[0]);
  };
  // console.log(filterdData);

  const validation = (target) => {
    const newInfo = { ...orderInfo };

    if (target.name === "companyName") {
      if (target.value.length > 0) {
        newInfo[target.name] = target.value;
      }
      if (target.value.length < 0) {
        newInfo.companyNameError = "please fill ";
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

    const { status, name, email, price, file, companyName } = orderInfo;
    if (email && price) {
      //storing project photo to server
      const formData = new FormData();
      formData.append("file", file);
      fetch("http://localhost:5000/uploadImg", {
        method: "POST",
        body: formData,
      });
      //storing data in database
      const { title, description } = filterdData;
      console.log(name, title, description, status);
      const finalResult = {
        companyName,
        price,
        email,
        title,
        name,
        description,
        status,
      };
      console.log(finalResult);
      fetch("http://localhost:5000/orderInfo", {
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
            value={orderInfo.orderCatagory}
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
