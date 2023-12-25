import "./style.css";
import WhyUsCard from "../WhyUsCard";
import * as contentData from "../../utils/contentData";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="fw-bold">Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex flex-lg-nowrap justify-content-md-between">
          {contentData.whyUsContent.map((data, id) => (
            <WhyUsCard key={id} all={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
