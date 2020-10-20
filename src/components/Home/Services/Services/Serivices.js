import React, { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Serivices = () => {
  const [services, setServices] = useState([]);

  fetch("https://damp-ridge-35487.herokuapp.com/gettingAddService")
    .then((res) => res.json())
    .then((data) => {
      setServices(data);
    });

  return (
    <div className="my-5">
      <h2 className="text-center pt-5" style={{ color: "#2D2D2D" }}>
        Provide awsome <span style={{ color: "#7AB259" }}>services</span>
      </h2>
      <div className="row">
        {services.map((service) => (
          <ServiceCard
            service={service}
            key={services.indexOf(service)}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Serivices;
