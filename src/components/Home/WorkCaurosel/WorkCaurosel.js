import React from "react";
import Slider from "react-slick";
import "./WorkCaurosel.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SliderWrapper from "./_SlickSliderStyle";
import caurosel1 from "../../../images/carousel-1.png";
import caurosel2 from "../../../images/carousel-2.png";
// import caurosel3 from "../../../images/carousel-3.png";
import caurosel4 from "../../../images/carousel-4.png";
import caurosel5 from "../../../images/carousel-5.png";

const WorkCaurosel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="top-container container-fluid">
      <div className="container-1 text-center">
        <h1 className="text-white">Here are some of our works</h1>
        <Slider {...settings}>
          <div className="">
            <img src={caurosel1} alt="" />
          </div>
          <div className="">
            <img src={caurosel2} alt="" />
          </div>

          <div className="">
            <img src={caurosel4} alt="" />
          </div>
          <div className="">
            <img src={caurosel5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WorkCaurosel;
