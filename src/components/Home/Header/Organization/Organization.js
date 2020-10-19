import React from "react";
import google from "../../../../images/logos/google.png";
import airbnb from "../../../../images/logos/airbnb.png";
import netflix from "../../../../images/logos/netflix.png";
import slack from "../../../../images/logos/slack.png";
import uber from "../../../../images/logos/uber.png";

const Organization = () => {
  // const imgArray =
  const imgStyle = {
    height: "10%",
    width: "10%",
  };
  const imgContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px 10%",
  };
  return (
    <div style={imgContainerStyle}>
      <img style={imgStyle} className="img-fluid " src={slack} alt="" />
      <img style={imgStyle} className="img-fluid" src={google} alt="" />
      <img style={imgStyle} className="img-fluid" src={uber} alt="" />
      <img style={imgStyle} className="img-fluid" src={netflix} alt="" />
      <img style={imgStyle} className="img-fluid" src={airbnb} alt="" />
    </div>
  );
};

export default Organization;
