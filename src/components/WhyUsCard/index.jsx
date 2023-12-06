const WhyUsCard = (props) => (
  <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
    <div className="why-us-card">
      <i className={props.all.iconImg}></i>
      <h6>{props.all.title}</h6>
      <p>{props.all.description}</p>
    </div>
  </div>
);

export default WhyUsCard;
