import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const history = useHistory();
  const [formInfo, setFormInfo] = useState({
    userName: "",
    companyName: "",
    description: "",
    file: "",
    userNameError: "",
    companyNameError: "",
    descriptionError: "",
    name: "",
  });
  // console.log(formInfo.userName);

  const isValid = (target) => {
    // console.log(target);
    const nameEror = `${target.name}Error`;
    const newInfo = { ...formInfo };
    // if (!target.name === "file") {
    if (target.value.length > 0) {
      newInfo[target.name] = target.value;
      newInfo[nameEror] = "";
      // console.log(newInfo);
    }
    if (target.value.length < 0) {
      newInfo[target.name`${Error}`] = "Please fill with your data";
      newInfo[target.name] = "";
    }
    // }
    if (target.name === "file") {
      newInfo.file = target.files[0];
      newInfo.name = target.files[0].name;
    }

    setFormInfo(newInfo);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const target = e.target;
    // console.log(target.value.length);
    isValid(target);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { userName, companyName, description, file, name } = formInfo;
    console.log(userName, companyName, description, file, name);
    if (userName && companyName && description) {
      alert("file submitted");
      //storing project photo to server
      const formData = new FormData();
      formData.append("file", file);
      fetch("https://damp-ridge-35487.herokuapp.com/uploadImg", {
        method: "POST",
        body: formData,
      });

      const finalResult = { userName, companyName, description, file, name };
      fetch("https://damp-ridge-35487.herokuapp.com/addReview", {
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
    if (!userName || !companyName || !description) {
      alert(`form not submited!
      please fill all input`);
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="review-form" action="">
        <input
          onChange={handleOnChange}
          className="input-brand"
          name="userName"
          type="text"
          placeholder="your name"
        />
        <br />
        {formInfo.userNameError && (
          <p className="text-danger">{formInfo.userNameError}</p>
        )}
        <input
          onChange={handleOnChange}
          className="input-brand"
          name="companyName"
          placeholder="company's name, designation"
          type="text"
        />
        <br />
        {formInfo.companyNameError && (
          <p className="text-danger">{formInfo.companyNameError}</p>
        )}
        <textarea
          onChange={handleOnChange}
          style={{ width: "60%" }}
          className="p-3"
          name="description"
          placeholder="Write your description"
          cols="30"
          rows="5"
        ></textarea>
        {formInfo.descriptionError && (
          <p className="text-danger">{formInfo.descriptionError}</p>
        )}

        <div>
          <input
            className="input-brand"
            onChange={handleOnChange}
            name="file"
            type="file"
          />
        </div>

        <button className="btn-brand">Send</button>
      </form>
    </div>
  );
};

export default Review;
