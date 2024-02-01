import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import * as contentData from "../../utils/contentData";
import * as formater from "../../helpers/formaters";
import { useEffect, useState } from "react";
import checklist from "../../assets/img/payment/checklist.png";

const PaymentSlip = ({ bank, totalPrice }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [selectedBank]);

  const handleSubmit = async () => {
    formater.scrollTop();
    navigate(`/payment/${param.id}/${selectedBank.toLowerCase()}`);
    console.log(param.id);
  };

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
          <div className="col-lg-7 col-9 content-left">
            <p>Instruksi Pembayaran</p>
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
        </div>
      </div>
    </>
  );
};

export default PaymentSlip;
