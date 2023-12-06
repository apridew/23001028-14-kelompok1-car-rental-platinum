import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarDetailResult = () => {
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

  const toIdrFormat = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const dataCarDetail = [
    { title: "Nama Mobil", content: carDetail.name, icon: "bi bi-car-front-fill" },
    { title: "Kategori", content: carDetail.category, icon: "bi bi-people" },
    { title: "Harga Sewa per Hari", content: toIdrFormat(carDetail.price), icon: "bi bi-tags" },
    { title: "Status", content: carDetail.status, icon: "bi bi-bounding-box" },
  ];

  let categoryText = "";
  if (carDetail.category == "small") {
    categoryText = "2 - 4 Orang";
  } else if (carDetail.category == "medium") {
    categoryText = "4 - 6 Orang";
  } else {
    categoryText = "6 - 8 Orang";
  }

  let statusText = "";
  if (carDetail.status == "true") {
    statusText = "Tidak Tersedia";
  } else {
    statusText = "Tersedia";
  }

  return (
    <>
      <div className="bg-car-detail"></div>
      <div className="container wrapper-car-detail-result mb-0" id="car-detail-result">
        <h5>Pencarianmu</h5>
        <div className="row">
          {dataCarDetail.map((data, id) => (
            <div key={id} className="col">
              <p>{data.title}</p>
              <div className="box-data mt-2">
                {data.title === "Kategori" && <p>{categoryText}</p>}
                {data.title === "Status" && <p>{statusText}</p>}
                {data.title !== "Kategori" && data.title !== "Status" && <p>{data.content}</p>}
                <i className={data.icon}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarDetailResult;
