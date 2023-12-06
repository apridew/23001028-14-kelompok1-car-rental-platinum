const TestimonialCard = (props) => (
  <div className="container testimonial-card border border-1 rounded d-flex align-items-center justify-content-center pt-sm-4 pt-md-0 pt-lg-0">
    <div className="row d-flex">
      <div className="col-lg-2 col-md-2 col-sm-12 mx-lg-4 d-flex align-items-center justify-content-center text-center">
        <img src={props.all.img} />
      </div>
      <div className="col d-flex flex-column py-5">
        <div className="d-flex">
          <i className={props.all.starIcon}></i>
          <i className={props.all.starIcon}></i>
          <i className={props.all.starIcon}></i>
          <i className={props.all.starIcon}></i>
          <i className={props.all.starIcon}></i>
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
        </p>
        <h6>{props.all.userDesc}</h6>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
