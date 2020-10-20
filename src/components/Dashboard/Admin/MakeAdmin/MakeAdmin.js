import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const MakeAdmin = () => {
  const history = useHistory();
  const [validateInfo, setValidateInfo] = useState({
    email: "",
    error: "",
  });

  const validation = (testResult, target) => {
    const newInfo = { ...validateInfo };
    if (testResult === true) {
      newInfo.email = target.value;
      newInfo.error = "";
    }

    if (testResult === false) {
      newInfo.error = "please input valid email";
      newInfo.email = "";
    }
    setValidateInfo(newInfo);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const target = e.target;
    const regexEmail = /\S+@\S+\.\S+/;
    const testResult = regexEmail.test(target.value);
    validation(testResult, target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInfo.email) {
      const { email } = validateInfo;
      const finalResult = { email };
      fetch("https://damp-ridge-35487.herokuapp.com/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalResult),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("adimin added");
          const refreshEmail = { ...validateInfo };
          refreshEmail.email = "";
          setValidateInfo(refreshEmail);
          if (data) history.push("/dashboard");
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="admin-email"> Email</label>
      <div className="d-flex align-items-center">
        <br />
        <input
          className="form-control w-50 d-inline mr-1 p-1"
          type="text"
          onBlur={handleBlur}
          placeholder="john@gmail.com"
          required
        />

        <button
          className="btn btn-second px-4 text-white"
          type="submit"
          style={{ backgroundColor: "green" }}
        >
          Submit
        </button>
      </div>
      <p>{validateInfo.error}</p>
    </form>
  );
};

export default MakeAdmin;
