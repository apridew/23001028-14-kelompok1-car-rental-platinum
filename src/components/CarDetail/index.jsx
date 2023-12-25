import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import * as contentData from "../../utils/contentData";
import * as formater from "../../helpers/formaters";

const CarDetail = () => {
  const [carDetail, setCarDetail] = useState({});

  const param = useParams();

  useEffect(() => {
    handleGetCarDetail();
  }, []);

  const handleGetCarDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        setCarDetail(res.data);
        console.log("API Car Detail", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mb-5" id="car-detail">
        <div className="row">
          <div className="col content-left">
            <p>Tentang Paket</p>
            <p>Include</p>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p>Exclude</p>
            <ul>
              {contentData.detailCarList.map((data, id) => (
                <li key={id}>{data.list}</li>
              ))}
            </ul>
            <div
              className="accordion border-0 shadow-none px-0"
              id="accordion-detail-car"
            >
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-white p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p>Refund, Reschedule, Overtime</p>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion-detail-car"
                >
                  <div className="accordion-body ps-0 py-0 b-0">
                    <ul>
                      {contentData.detailCarList.map((data, id) => (
                        <li key={id}>{data.list}</li>
                      ))}
                      {contentData.detailCarList.map((data, id) => (
                        <li key={id}>{data.list}</li>
                      ))}
                      {contentData.detailCarList.map((data, id) => (
                        <li key={id}>{data.list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 content-right d-flex justify-content-center">
            <div className="frame-card">
              <div className="content-card-top">
                <img
                  className="img-fluid"
                  src={carDetail.image}
                  alt={carDetail.name}
                />
                <p>{carDetail.name}</p>
                <h6>
                  <span>
                    <i className="bi bi-people"></i>
                  </span>
                  {formater.categoryTextFormater(carDetail.category)}
                </h6>
                <div className="content-card-bottom mt-4">
                  <p>Total</p>
                  <p>{formater.idrFormater(carDetail.price)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
