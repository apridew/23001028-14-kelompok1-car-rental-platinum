import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as formater from "../../helpers/formaters";
import CountDown from "../CountDown";
import PaymentSlip from "../PaymentSlip";

const PaymentDetail = () => {
  const [carDetail, setCarDetail] = useState({});
  const [orderData, setOrderData] = useState({});
  const [noImage, setNoImage] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  let { id, bank } = useParams();
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
        console.log("API Order Data", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc";
    const config = {
      headers: {
        access_token: token,
      },
    };

    const formData = new FormData();
    formData.append("slip", image);

    if (!image) {
      setNoImage(false);
    }
    await axios
      .put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        formData,
        config
      )
      .then((res) => {
        console.log("API Upload Slip", res);
      })
      .catch((err) => {
        console.log(err.response.data);
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

  const handleImage = (event) => {
    const uploadedImage = event.target.files[0];
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(uploadedImage);
    setNoImage(true);
    console.log(event.target.files[0]);
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
              <h4 className="m-0">{`${bank.toUpperCase()} Transfer`}</h4>
              <p className="m-0">{`Order ID : ${id}`}</p>
            </div>
          </div>
          <div className="payment-right-header d-flex align-items-center gap-3 flex-wrap">
            <p className="bg-blue px-1 rounded-5">
              <i className="bi bi-check"></i>
            </p>
            <p>Pilih Metode</p>
            <i className="line"></i>
            <p className="bg-blue px-2 rounded-5">2</p>
            <p>Bayar</p>
            <i className="line"></i>
            <p className=" border-blue px-2 rounded-5">3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>

      <div className="wrpper-all-payment" id="payment-detail">
        {/* Left First Content */}
        <div className="d-flex flex-column gap-4">
          <div className="container wrapper-payment-detail mb-0">
            <div className="left-payment">
              <h5 className="fs-6">Selesaikan Pembayaran Sebelum</h5>
              <p className="text-dark fw-bold">{`${formater.getTomorrowDate()} WIB`}</p>
            </div>
            <div className="right-payment">
              <CountDown
                showHours={true}
                hours={23}
                minutes={59}
                seconds={59}
              />
            </div>
          </div>
          <PaymentSlip bank={bank} totalPrice={totalPrice || 0} />
        </div>

        {/* Right Content */}
        <div className="col-4 h-100 p-0 content-right d-flex justify-content-center justify-content-lg-end">
          <div className="frame-card">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fs-6">Konfirmasi Pembayaran</h5>
              <CountDown showHours={false} minutes={9} seconds={59} />
            </div>
            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>
            <div className="d-flex flex-column justify-content-center pt-4">
              <p className="fs-6">Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>

              <input
                onChange={handleImage}
                type="file"
                name="slip"
                id="slip"
                accept="image/*"
              />
              <label
                htmlFor="slip"
                className="d-flex justify-content-center align-items-center mb-4 "
                role="button"
              >
                {image ? (
                  <div className="upload-slip d-flex justify-content-center align-items-center">
                    <img src={preview} alt="upload" />
                  </div>
                ) : (
                  <div className="upload-slip d-flex justify-content-center align-items-center">
                    <i className="bi bi-image text-dark fs-4 "></i>
                  </div>
                )}
              </label>
            </div>

            {!noImage && (
              <div className="pop-up-payment card text-center p-1 bg-danger-subtle text-danger mb-3">
                Masukan gambar terlebih dahulu!
              </div>
            )}
            <button onClick={handleUpload} className="button">
              {image ? "Konfirmasi" : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
