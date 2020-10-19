import React, { useEffect, useState } from "react";
import FeedBackCard from "../FeedBackCard/FeedBackCard";
// import customer1 from "../../../../images/customer-1.png";
// import customer2 from "../../../../images/customer-2.png";
// import customer3 from "../../../../images/customer-3.png";

const FeedBack = () => {
  const [feedbacks, setFeedBacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderReview")
      .then((res) => res.json())
      .then((data) => {
        setFeedBacks(data.slice(0, 6));
      });
  }, []);

  // const feedbacks = [
  //   {
  //     img: customer1,
  //     name: "Nash Patrik",
  //     title: "CEO, Manpol",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus saepe fugiat? Voluptatem, eum neque.",
  //   },
  //   {
  //     img: customer2,
  //     name: "Mirriam Barron",
  //     title: "CEO, Manpol",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus saepe fugiat? Voluptatem, eum neque.",
  //   },
  //   {
  //     img: customer3,
  //     name: "Bria Malon",
  //     title: "CEO, Manpol",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus saepe fugiat? Voluptatem, eum neque.",
  //   },
  // ];
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
