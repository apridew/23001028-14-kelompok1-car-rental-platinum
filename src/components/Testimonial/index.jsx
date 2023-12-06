import "./style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import user1img from "../../assets/img/testimonial/img_photo1.png";
import user2img from "../../assets/img/testimonial/img_photo2.png";
import TestimonialCard from "../TestimonialCard";
import { useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 2,
    slidesToSlide: 1,
  },
};

const cardTestimonial = [
  {
    starIcon: "bi bi-star-fill",
    img: user1img,
    userDesc: "John Dee 32, Bromo",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user2img,
    userDesc: "Jane Marie 28, Jakarta",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user1img,
    userDesc: "Bryan Chan 22, Bali",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user2img,
    userDesc: "Sarah Carl 26, Bogor",
  },
];

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
      <div className={`button-left button-slide ${isButtonClicked ? "clicked" : ""}`} onClick={handleClick}>
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
      <div className={`button-right button-slide ${isButtonClicked ? "" : "clicked"}`} onClick={handleClick}>
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
            <p className="text-center pb-3">Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        customRightArrow={<CustomRight onClick={handleRightClick} isClicked={!isButtonClicked} />}
        customLeftArrow={<CustomLeft onClick={handleLeftClick} isClicked={isButtonClicked} />}
      >
        {cardTestimonial.map((data, id) => (
          <TestimonialCard key={id} all={data} />
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonial;
