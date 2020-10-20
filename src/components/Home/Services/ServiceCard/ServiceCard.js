import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";

const ServiceCard = ({ service }) => {
  const [userInfo, setUserInfo] = useContext(UserContext);

  const history = useHistory();

  const handleClick = (e) => {
    const target = e.target;
    const newInfo = { ...userInfo };
    if (target.id === "div") {
      newInfo.orderCatagory = target.children[1].innerText;
    }
    if (target.id !== "div") {
      newInfo.orderCatagory = target.parentNode.children[1].innerText;
    }
    setUserInfo(newInfo);
    history.push("/dashboard");
  };
  return (
    <div
      onClick={handleClick}
      style={{ color: "#111430" }}
      className="p-3 col-md-4 text-center"
    >
      <div style={{ position: "relative" }} className="p-5 bg-white " id="div">
        <img
          style={{ height: "70px" }}
          src={`https://damp-ridge-35487.herokuapp.com/${service.name}`}
          alt=""
        />
        <h6 className="my-4 font-weight-bold text-info">{service.title}</h6>
        <p className="opacity-1">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
