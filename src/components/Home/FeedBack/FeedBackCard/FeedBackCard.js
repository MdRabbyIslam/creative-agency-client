import React from "react";

const FeedBackCard = ({ feedback }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="border border-dark px-3 py-3">
        <div className="d-flex ">
          <img
            style={{ height: "50px" }}
            src={`http://localhost:5000/${feedback.name}`}
            alt=""
          />
          <div className="font-weight-bold pl-3">
            <h5>{feedback.userName}</h5>
            <h6>{feedback.companyName}</h6>
          </div>
        </div>
        <p style={{ color: "#707070" }} className="opacity-3 py-2">
          {feedback.description}
        </p>
      </div>
    </div>
  );
};

export default FeedBackCard;
