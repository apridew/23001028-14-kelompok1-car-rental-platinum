import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import * as contentData from "../../utils/contentData";
import * as formater from "../../helpers/formaters";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import addDays from "date-fns/addDays";
import * as icon from "react-feather";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CarDetail = () => {
  const [carDetail, setCarDetail] = useState({});
  // console.log("Car Detail:", carDetail);
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");
  // console.log("Input Value:", inputValue);
  const param = useParams();
  const refOne = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const formatDateToMonthName = (date) => {
    return format(date, "dd MMMM yyyy");
  };


  const handleButton = () => {
    console.log("Selected Range:", range[0]);
    setOpen(false);

    if (range[0].startDate && range[0].endDate) {
      setRange([
        {
          startDate: range[0].startDate,
          endDate: range[0].endDate,
          key: "selection",
        },
      ]);

      const totalDays = Math.ceil((range[0].endDate - range[0].startDate) / (1000 * 60 * 60 * 24));
      console.log("Total Days:", totalDays);

      if (totalDays > 7) {
        console.log("Car cannot be longer than 7 days");
        setError("Car cannot be longer than 7 days");
        setInputValue("");
      } else {
        const totalPrice = totalDays * carDetail.price;
        setPrice(totalPrice);

        const formattedStartDate = formatDateToMonthName(range[0].startDate);
        const formattedEndDate = formatDateToMonthName(range[0].endDate);

        setInputValue(`${formattedStartDate} - ${formattedEndDate}`);
      }
      // console.log(totalPrice);
    }
  };

  const handleSubmit = async () => {
    console.log('Input Value:', inputValue);

    try {
      const data = {
        "start_rent_at": range[0].startDate,
        "finish_rent_at": range[0].endDate,
        "car_id": carDetail.id,
      };
      // console.log("Data:", data)

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNjc1MzQ0NX0.jPvYk2i9vZNrPKq5gy6xxlfhAZNALVINO5sMYoaJOiI"

      const config = {
        headers: {
          access_token: token
        }
      }

      const ress = await axios.post(`https://api-car-rental.binaracademy.org/customer/order`, data, config)
      console.log("Custom Order:", ress.data)

      setTimeout(() => {
        navigate(`/payment/${ress.data.id}`)
      }, 1000)
    } catch (error) {
      console.log(error.response.data);
    }
  }


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

                <div className="calendarInput">
                  {!inputValue && <span className="input-error" style={{ display: error ? "block" : "none" }}>{error}</span>}
                  <label htmlFor="info">Tentukan lama sewa mobil (max. 7 hari)</label>
                  <icon.Calendar onClick={() => setOpen(open => !open)} />
                  <input
                    id="info"
                    readOnly
                    className="inputBox"
                    placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                    value={inputValue}
                    onClick={() => setOpen((open) => !open)}
                    style={{ fontSize: "14px" }}
                  />
                </div>

                <div className="calendarWrap" ref={refOne}>
                  {open && (
                    <>
                      <DateRange
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        // shownDate={addDays(new Date(), 1)}
                        minDate={new Date()}
                        direction="horizontal"
                        className="calendarElements"
                        rangeColors={["#35B0A7"]}
                        showMonthAndYearPickers={true}
                      />
                      <div className="calendarButton">
                        <button onClick={handleButton}>Pilih Tanggal</button>
                      </div>
                    </>
                  )}
                </div>

                <div className="content-card-bottom mt-4">
                  <p>Total</p>
                  <p>{formater.idrFormater(price)}</p>
                </div>

                <button
                  className={`button ${!inputValue ? "" : "disabled"}`}
                  onClick={handleSubmit}
                  disabled={!inputValue}
                >
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
