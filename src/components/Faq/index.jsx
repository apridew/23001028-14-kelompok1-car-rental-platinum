import FaqAccordion from "../FaqAccordion";
import "./style.css";
import * as contentData from "../../utils/contentData";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 caption">
            <h4 className="fw-bold pb-3">Frequently Asked Question</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col">
            <div className="accordion" id="accordion-faq">
              {contentData.accordionData.map((data, id) => (
                <FaqAccordion key={id} all={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
