import React, { useState } from "react";
import Dropdown from "../AdminServiceList/Dropdown";

const AdminService = ({ service }) => {
  const [currentStatus, setCurrentStatus] = useState(service.status);
  const handleStatus = (e, id) => {
    const status = e.target.value;
    console.log(e.target.value);
    console.log(id);
    setCurrentStatus(status);
    const product = { id, status };

    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("updated successfully");
        }
      });
  };
  return (
    <div className="heading bg-white" key={service._id}>
      <p>{service.companyName}</p>
      <p>{service.email}</p>
      <p>{service.title}</p>
      <p>{service.description}</p>
      <Dropdown
        id={service._id}
        currentStatus={currentStatus}
        handleStatus={handleStatus}
      ></Dropdown>
    </div>
  );
};

export default AdminService;
