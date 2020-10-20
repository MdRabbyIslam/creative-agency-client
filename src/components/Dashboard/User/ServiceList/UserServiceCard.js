import React from "react";

const UserServiceCard = ({ service }) => {
  return (
    <div style={{ color: "#111430" }} className="p-3 col-md-4 text-center">
      <div style={{ position: "relative" }} className="p-5 bg-white " id="div">
        <img
          style={{ height: "70px" }}
          src={`https://damp-ridge-35487.herokuapp.com/${service.name}`}
          alt=""
        />
        <h6 className="my-4 font-weight-bold text-info">
          {service.orderCatagory}
        </h6>
        <p className="opacity-1">budget: ${service.price}</p>

        {service.status === "pending" ? (
          <p
            style={{ top: "5px", right: "5px" }}
            className="position-absolute bg-danger text-white p-2 rounded"
          >
            {service.status}
          </p>
        ) : (
          [
            service.status === "ongoing" ? (
              <p
                style={{ top: "5px", right: "5px" }}
                className="position-absolute bg-primary text-white p-2 rounded"
              >
                {service.status}
              </p>
            ) : (
              [
                service.status === "done" && (
                  <p
                    style={{ top: "5px", right: "5px" }}
                    className="position-absolute bg-success text-white p-2 rounded"
                  >
                    {service.status}
                  </p>
                ),
              ]
            ),
          ]
        )}
      </div>
    </div>
  );
};

export default UserServiceCard;
