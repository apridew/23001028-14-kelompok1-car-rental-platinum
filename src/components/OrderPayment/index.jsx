import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import * as contentData from "../../utils/contentData";
import * as formater from "../../helpers/formaters";
import { useEffect, useState } from "react";
import checklist from "../../assets/img/payment/checklist.png";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, clearLoading } from "../../redux/features/cars/auth/auth";

const OrderPayment = ({ price, nameCar, category, daysRent, totalPrice }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  useEffect(() => {}, [selectedBank]);

  const handleSubmit = async () => {
    formater.scrollTop();
    dispatch(setLoading());

    setTimeout(() => {
      dispatch(clearLoading());
      navigate(`/payment/${param.id}/${selectedBank.toLowerCase()}`);
    }, 1000);
    console.log(param.id);
  };

  const chooseBank = (e) => {
    setSelectedBank(e.currentTarget.dataset.value);
    console.log(e.currentTarget.dataset.value);
  };

  return (
    <>
      <div className="container p-0 mb-5" id="order-payment">
        <div className="row justify-content-center">
          {/* Left Content */}
          <div className="col-lg-7 col-9 content-left">
            <p>Pilih Bank Transfer</p>
            <p className="fw-normal">
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            {contentData.banksTransfer.map((data, id) => (
              <div
                key={id}
                className="banks d-flex align-items-center gap-3 border-1 border-bottom py-4"
              >
                <div
                  className="card px-3 py-1 text-center"
                  onClick={chooseBank}
                  data-value={data.name}
                  role="button"
                >
                  {data.name}
                </div>
                <div className="border-2">{data.desc}</div>
                {selectedBank === data.name && (
                  <div className="w-50 text-end">
                    <img src={checklist} alt="checklist" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="col p-0 content-right d-flex justify-content-center justify-content-lg-end">
            <div className="frame-card h-100">
              <div className="content-card-top">
                <p>{nameCar}</p>
                <h6 className="pt-1">
                  <span>
                    <i className="bi bi-people"></i>
                  </span>
                  {formater.categoryTextFormater(category)}
                </h6>
              </div>
              <div
                className="accordion border-0 shadow-none px-0"
                id="accordion-detail-car"
              >
                <div className="accordion-item border-0 pt-5">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-white p-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="content-card-bottom mt-4 d-flex justify-content-between w-100">
                        <p>Total</p>
                        <p className="fw-semibold">
                          {formater.idrFormater(totalPrice)}
                        </p>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion-detail-car"
                  >
                    <div className="accordion-body ps-0 py-0 b-0">
                      <p className="fw-semibold">Harga</p>
                      <ul>
                        <li>
                          <div className="content-card-bottom mt-4 d-flex justify-content-between w-100">
                            <p>
                              Sewa Mobil {formater.idrFormater(price)} x{" "}
                              {daysRent} Hari
                            </p>
                            <p>{formater.idrFormater(totalPrice)}</p>
                          </div>
                        </li>
                      </ul>
                      <p className="fw-semibold">Biaya Lainnya</p>
                      <ul>
                        <li>
                          <div className="content-card-bottom mt-4 d-flex justify-content-between w-100">
                            <p>Pajak</p>
                            <p className="include">Termasuk</p>
                          </div>
                        </li>
                        <li>
                          <div className="content-card-bottom mt-4 d-flex justify-content-between w-100">
                            <p>Biaya Makan Sopir</p>
                            <p className="include">Termasuk</p>
                          </div>
                        </li>
                      </ul>
                      <p className="fw-semibold">Belum Termasuk</p>
                      <ul>
                        <li>
                          <div className="content-card-bottom mt-4 d-flex justify-content-between w-100">
                            <p>Bensin</p>
                          </div>
                        </li>
                        <li>
                          <div className="content-card-bottom mt-4 ">
                            <p>Tol dan Parkir</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="content-card-bottom mt-4 d-flex fw-semibold justify-content-between w-100 border-2 border-top pt-4">
                      <p>Total</p>
                      <p>{formater.idrFormater(totalPrice)}</p>
                    </div>
                  </div>
                </div>

                <button
                  className={`button ${!selectedBank ? "" : "disabled"}`}
                  onClick={handleSubmit}
                  disabled={!selectedBank || isLoading}
                >
                  {isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden"></span>
                    </div>
                  ) : (
                    "Bayar"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPayment;
