import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../../../Home/Services/ServiceCard/ServiceCard";

const ServiceList = () => {
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orderInfo")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (singleData) => singleData.email === email
        );
        setServices(filteredData);
      });
  }, []);
  console.log(services);

  return (
    <div className="row">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default ServiceList;
