import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import * as contentData from "../../utils/contentData";
import * as formater from "../../helpers/formaters";
import { useEffect, useState } from "react";
import checklist from "../../assets/img/payment/checklist.png";

const PaymentSlip = ({ bank, totalPrice }) => {
  const [selectedBank, setSelectedBank] = useState("ATM");
  const [isCopy, setIsCopy] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [selectedBank]);

  const chooseBank = (e) => {
    setSelectedBank(e.currentTarget.dataset.value);
    console.log(e.currentTarget.dataset.value);
  };

  const copyToClipboard = async (id) => {
    let text = document.getElementById(id).innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard", text);
      setIsCopy(true);

      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="container p-0 mb-5" id="payment-slip">
        <div className="row justify-content-center">
          {/* Left Second Content */}
          <div className="col-lg-7 col-9 content-left">
            <p>Lakukan Transfer Ke</p>

            {/* Pop Up Copy */}
            <div className="d-flex gap-3 border-1 flex-column">
              {isCopy && (
                <div className="pop-up-payment card text-center p-1 bg-success-subtle text-success">
                  Berhasil copy data
                </div>
              )}

              <div className="banks d-flex align-items-center gap-3">
                <div className="card px-3 py-1 text-center">
                  {bank.toUpperCase()}
                </div>
                <div className="border-2">
                  {bank.toUpperCase()} Transfer
                  <p className="fw-normal position-absolute">
                    a.n Binar Car Rental
                  </p>
                </div>
              </div>

              <p className="fw-normal p-0">Nomor Rekening</p>
              <div className="copy-text card border-black">
                <p className="p-0 fw-normal" id="bank-account">
                  54104257877
                </p>
                <i
                  role="button"
                  className="bi bi-copy text-dark"
                  onClick={() => copyToClipboard("bank-account")}
                ></i>
              </div>

              <p className="fw-normal p-0">Total Bayar</p>
              <div className="copy-text card border-black d-flex">
                <p className="p-0">{`${formater.idrFormater(totalPrice)}`}</p>
                <div className="d-none" id="total-price">
                  {totalPrice}
                </div>
                <i
                  role="button"
                  className="bi bi-copy text-dark"
                  onClick={() => copyToClipboard("total-price")}
                ></i>
              </div>
            </div>
          </div>

          {/* Left Third Content */}
          <div className="col-lg-7 col-9 content-left pb-5">
            <p>Instruksi Pembayaran</p>

            <div className="d-flex justify-content-evenly">
              {contentData.bankPaymentOptions.map((data, id) => (
                <div
                  key={id}
                  className="banks w-100 d-flex flex-column align-items-center "
                >
                  <div
                    onClick={chooseBank}
                    data-value={data.name}
                    role="button"
                    key={id}
                    className="py-2 text-center"
                  >
                    {data.name}{" "}
                    {data.name === "Internet Banking"
                      ? ""
                      : param.bank.toLocaleUpperCase()}
                  </div>
                  {selectedBank === data.name && (
                    <div className="border-2 border-success border-bottom w-100"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-1 border-bottom w-100"></div>
            {/* Content Payment Options */}
            <div className="content-payment-options mt-3 text-secondary">
              <ul>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek{" "}
                  {param.bank.toLocaleUpperCase()} Virtual Account”
                </li>
                <li>
                  Masukkan nomor {param.bank.toLocaleUpperCase()} Virtual
                  Account: 70020+Order ID
                </li>
              </ul>
              <p className="ps-4 py-1 m-0 fw-light fs-6 text-secondary">
                Contoh :
              </p>
              <p className="ps-4 m-0 fw-light fs-6 text-secondary">
                No. Peserta: 12345678, maka ditulis 7002012345678
              </p>
              <ul>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSlip;
