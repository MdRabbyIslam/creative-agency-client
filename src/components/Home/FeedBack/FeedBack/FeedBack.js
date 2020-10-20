import React, { useEffect, useState } from "react";
import FeedBackCard from "../FeedBackCard/FeedBackCard";

const FeedBack = () => {
  const [feedbacks, setFeedBacks] = useState([]);

  useEffect(() => {
    fetch("https://damp-ridge-35487.herokuapp.com/orderReview")
      .then((res) => res.json())
      .then((data) => {
        setFeedBacks(data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <h2 className="text-bold text-center p-5">
        <span style={{ color: "#171B4E" }}>Clients</span>{" "}
        <span style={{ color: "#7AB259" }}>Feedback</span>
      </h2>
      <div className="row px-5">
        {feedbacks.map((feedback) => (
          <FeedBackCard
            feedback={feedback}
            key={feedbacks.indexOf(feedback)}
          ></FeedBackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
