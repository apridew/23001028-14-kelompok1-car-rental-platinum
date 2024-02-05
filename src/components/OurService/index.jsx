import "./style.css";
import girlImage from "../../assets/img/our-services/img_service.png";
import * as contentData from "../../utils/contentData";

const OurService = () => {
  return (
    <section id="our-services">
      <div className="container pt-2">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-12 text-center">
            <img className="img-fluid" src={girlImage} alt="services" />
          </div>
          <div className="col-lg-6 col-md-12 services-right d-flex flex-column justify-content-center ps-lg-5 ps-sm-1 pt-4 mb-4">
            <h2 className="fw-semibold pb-3">
              Best Car Rental for any kind of trip in Jakarta!
            </h2>
            <p className="pb-3">
              Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <div className="services-right-list">
              {contentData.ourServiceList.map((data, id) => (
                <p key={id}>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>
                  {data.list}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
