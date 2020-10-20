import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../../../Home/Services/ServiceCard/ServiceCard";
import UserServiceCard from "./UserServiceCard";

const ServiceList = () => {
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);
  useEffect(() => {
    (() => {
      fetch("https://damp-ridge-35487.herokuapp.com/orderInfo")
        .then((res) => res.json())
        .then((data) => {
          const filteredData = data.filter(
            (singleData) => singleData.email === email
          );
          setServices(filteredData);
        });
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      {services.map((service) => (
        <UserServiceCard
          key={services.indexOf(service)}
          service={service}
        ></UserServiceCard>
      ))}
    </div>
  );
};

export default ServiceList;
