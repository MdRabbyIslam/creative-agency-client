import React from "react";
import frame from "../../../../images/logos/Frame.png";
const MainHeader = () => {
  return (
    <div style={{ height: "500px" }} className="row d-flex align-items-center">
      <div className="col-md-5 ">
        <h1 style={{ color: "#111430", fontWeight: "600" }}>
          Lets Grow Your Brand To The Next Level
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          atque. Explicabo quisquam nihil at ipsum.
        </p>
        <button className="btn btn-brand">Hire us</button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={frame} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
