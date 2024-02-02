import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as formater from "../../helpers/formaters";
import successIcon from "../../assets/img/payment/success.png";
import MyDocumentPDF from "../MyDocumentPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

const EtiketPayment = () => {
  const [carDetail, setCarDetail] = useState({});
  const [orderData, setOrderData] = useState({});
  const [userData, setUserData] = useState({});

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetOrderDetail();
  }, []);

  const handleGetOrderDetail = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc";
    const config = {
      headers: {
        access_token: token,
      },
    };
    await axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/order/${id}`,
        config
      )
      .then((res) => {
        setOrderData(res.data);
        setCarDetail(res.data.Car);
        setUserData(res.data.User);
        console.log("API Order Data", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const daysRent = formater.daysRentFormatter(
    orderData.start_rent_at,
    orderData.finish_rent_at
  );

  const totalPrice = daysRent * carDetail.price;

  const backPage = () => {
    navigate(-1);
  };

  const handlePreviewPDF = () => {
    navigate(`/payment/${id}/pdf`);
    // window.open(url, "_blank");
  };

  return (
    <>
      {/* Header Payment Step */}
      <div className="bg-car-detail">
        <div className="container header-top-order d-flex align-items-center justify-content-between mt-3">
          <div className="left-header d-flex align-items-center">
            <i
              onClick={backPage}
              className="bi bi-arrow-left-short fs-1"
              role="button"
            ></i>
            <div className="info-bank-order ps-3">
              <h4 className="m-0">Tiket</h4>
              <p className="m-0">{`Order ID : ${id}`}</p>
            </div>
          </div>
          <div className="payment-right-header d-flex align-items-center gap-3 flex-wrap">
            <p className="bg-blue px-1 rounded-5">
              <i className="bi bi-check"></i>
            </p>
            <p>Pilih Metode</p>
            <i className="line"></i>
            <p className="bg-blue px-1 rounded-5">
              <i className="bi bi-check"></i>
            </p>
            <p>Bayar</p>
            <i className="line"></i>
            <p className=" bg-blue px-2 rounded-5">3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="d-flex justify-content-center flex-column"
        id="etiket-payment"
      >
        {/* Top Content */}
        <div className="top-etiket-content d-flex text-center flex-column justify-content-center gap-3 mt-5">
          <div className="succes-icon">
            <img src={successIcon} alt="success" />
          </div>
          <h4>Pembayaran Berhasil!</h4>
          <p className="text-secondary">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>

        {/* Bottom Content */}
        <div className="bottom-etiket-content">
          <div className="frame-card">
            <div className="first-content-etiket d-flex justify-content-between">
              <h5>Invoice</h5>
              <div className="download-btn">
                <div>
                  <div>
                    <PDFDownloadLink
                      document={
                        <MyDocumentPDF
                          invoice={`Invoice-${id}-${orderData.CarId}`}
                          email={userData.email}
                          carName={carDetail.name}
                          capacity={formater.categoryTextFormater(
                            carDetail.category
                          )}
                          rent={`${formater.dateFormater(
                            orderData.start_rent_at
                          )} - ${formater.dateFormater(
                            orderData.finish_rent_at
                          )}`}
                          total={`${daysRent} Hari x ${formater.idrFormater(
                            carDetail.price
                          )} = ${formater.idrFormater(totalPrice)}`}
                        />
                      }
                      fileName={`Invoice-${id}-${orderData.CarId}.pdf`}
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? (
                          "Loading document..."
                        ) : (
                          <button>
                            <i className="bi bi-download"></i> Unduh
                          </button>
                        )
                      }
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-content-etiket">
              <p>
                *{id}-{orderData.CarId}
              </p>
              <button onClick={handlePreviewPDF}>
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <i className="bi bi-image text-dark fs-4 "></i>
                  <p className="m-0">PDF Viewer</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EtiketPayment;
