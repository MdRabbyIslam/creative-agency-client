import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Adservice.css";

const AdService = () => {
  const [serviceInfo, setServiceInfo] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const newService = { ...serviceInfo };
    if (e.target.name !== "file") newService[target.name] = target.value;
    if (e.target.name === "file") {
      newService.file = target.files[0];
      newService.name = target.files[0].name;
    }
    setServiceInfo(newService);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", serviceInfo.file);
    //sending information to server
    fetch("http://localhost:5000/addServiceImg", {
      method: "POST",
      body: formData,
    });

    const { name, title, description } = serviceInfo;
    const finalResult = { name, title, description };
    fetch("http://localhost:5000/addServiceInfo", {
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
  };
  return (
    <form className="add-service-form" onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Enter service title"
        />
      </div>
      <div>
        <textarea
          onChange={handleChange}
          placeholder="enter about service"
          name="description"
          cols="30"
          rows="10"
        />
      </div>
      <div>
        <input type="file" name="file" onChange={handleChange} />
      </div>
      <div>
        <button className="btn-brand">Add</button>
      </div>
    </form>
  );
};
export default AdService;
