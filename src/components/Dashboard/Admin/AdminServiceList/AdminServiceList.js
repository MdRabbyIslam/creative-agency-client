import React, { useEffect, useState } from "react";
import AdminService from "../AdminService/AdminService";
import "./AdminServiceList.css";

const AdminServiceList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://damp-ridge-35487.herokuapp.com/orderInfo")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="p-3 bg-white">
      <div className="heading ">
        <h5>Name</h5>
        <h5>Email ID</h5>
        <h5>Service</h5>
        <h5>Project Details</h5>
        <p className="text-letf">status</p>
      </div>
      {services.map((service) => (
        <AdminService service={service}></AdminService>
      ))}
    </div>
  );
};

export default AdminServiceList;
