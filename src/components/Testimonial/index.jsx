import "./style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import TestimonialCard from "../TestimonialCard";
import * as contentData from "../../utils/contentData";
import { useState } from "react";

const Testimonial = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleLeftClick = () => {
    setIsButtonClicked(true);
  };

  const handleRightClick = () => {
    setIsButtonClicked(false);
  };

  const CustomLeft = ({ onClick }) => {
    const handleClick = () => {
      handleLeftClick();
      onClick();
    };

    return (
      <div
        className={`button-left button-slide ${
          isButtonClicked ? "clicked" : ""
        }`}
        onClick={handleClick}
      >
        <h6>&lsaquo;</h6>
      </div>
    );
  };

  const CustomRight = ({ onClick }) => {
    const handleClick = () => {
      handleRightClick();
      onClick();
    };

    return (
      <div
        className={`button-right button-slide ${
          isButtonClicked ? "" : "clicked"
        }`}
        onClick={handleClick}
      >
        <h6>&rsaquo;</h6>
      </div>
    );
  };

  return (
    <section id="testimonial">
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <h4 className="fw-bold">Testimonial</h4>
            <p className="text-center pb-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </div>
      </div>
      <Carousel
        responsive={contentData.responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        customRightArrow={
          <CustomRight
            onClick={handleRightClick}
            isClicked={!isButtonClicked}
          />
        }
        customLeftArrow={
          <CustomLeft onClick={handleLeftClick} isClicked={isButtonClicked} />
        }
      >
        {contentData.cardTestimonial.map((data, id) => (
          <TestimonialCard key={id} all={data} />
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonial;
