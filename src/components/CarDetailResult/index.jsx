import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as formater from "../../helpers/formaters";

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

  const dataCarDetail = formater.dataCarFormater(
    carDetail.name,
    carDetail.category,
    carDetail.price,
    carDetail.status
  );

  const categoryText = formater.categoryTextFormater(carDetail.category);

  const statusText = formater.statusTextFormater(carDetail.status);

  return (
    <>
      <div className="bg-car-detail"></div>
      <div
        className="container wrapper-car-detail-result mb-0"
        id="car-detail-result"
      >
        <h5>Pencarianmu</h5>
        <div className="row">
          {dataCarDetail.map((data, id) => (
            <div key={id} className="col">
              <p>{data.title}</p>
              <div className="box-data mt-2">
                {data.title === "Kategori" && <p>{categoryText}</p>}
                {data.title === "Status" && <p>{statusText}</p>}
                {data.title !== "Kategori" && data.title !== "Status" && (
                  <p>{data.content}</p>
                )}
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
