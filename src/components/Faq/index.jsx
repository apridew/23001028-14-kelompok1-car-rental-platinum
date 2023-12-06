import FaqAccordion from "../FaqAccordion";
import "./style.css";

const accordionData = [
  {
    bsTarget: "#collapseOne",
    ariaExpanded: "true",
    ariaControls: "collapseOne",
    title: "Apa saja syarat yang dibutuhkan ?",
  },
  {
    bsTarget: "#collapseTwo",
    ariaExpanded: "false",
    ariaControls: "collapseTwo",
    title: "Berapa hari minimal sewa mobil lepas kunci ?",
  },
  {
    bsTarget: "#collapseThree",
    ariaExpanded: "false",
    ariaControls: "collapseThree",
    title: "Berapa hari sebelumnya sabaiknya booking sewa mobil ?",
  },
  {
    bsTarget: "#collapseFour",
    ariaExpanded: "false",
    ariaControls: "collapseFour",
    title: "Apakah Ada biaya antar-jemput ?",
  },
  {
    bsTarget: "#collapseFive",
    ariaExpanded: "false",
    ariaControls: "collapseFive",
    title: "Bagaimana jika terjadi kecelakaan ?",
  },
];
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
              {accordionData.map((data, id) => (
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
