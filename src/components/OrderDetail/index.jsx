import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as formater from "../../helpers/formaters";
import OrderPayment from "../OrderPayment";
import { getOrderDetail } from "../../helpers/apis";

const OrderDetail = () => {
  const [carDetail, setCarDetail] = useState({});
  const [orderData, setOrderData] = useState({});

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetOrderDetail();
  }, []);

  const handleGetOrderDetail = async () => {
    try {
      const res = await getOrderDetail(param.id);
      setOrderData(res.data);
      setCarDetail(res.data.Car);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const dataCarDetail = formater.orderCarFormatter(
    carDetail.name,
    carDetail.category,
    orderData.start_rent_at,
    orderData.finish_rent_at
  );

  const categoryText = formater.categoryTextFormater(carDetail.category);

  const daysRent = formater.daysRentFormatter(
    orderData.start_rent_at,
    orderData.finish_rent_at
  );

  const totalPrice = daysRent * carDetail.price;

  return (
    <>
      <div className="bg-car-detail">
        <div className="container header-top-order d-flex align-items-center justify-content-between mt-3">
          <div className="left-header d-flex align-items-center">
            <i
              onClick={() => navigate(-1)}
              className="bi bi-arrow-left-short fs-1"
              role="button"
            ></i>
            <h4 className="m-0">Pembayaran</h4>
          </div>
          <div className="right-header d-flex align-items-center gap-3 flex-wrap">
            <p className="bg-blue  px-2 rounded-5">1</p>
            <p>Pilih Metode</p>
            <i></i>
            <p className="border-blue px-2 rounded-5">2</p>
            <p>Bayar</p>
            <i></i>
            <p className=" border-blue px-2 rounded-5">3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>
      <div className="wrpper-all-order">
        <div className="container wrapper-order-detail mb-0" id="order-detail">
          <h5>Detail Pesananmu</h5>
          <div className="row">
            {dataCarDetail.map((data, id) => (
              <div key={id} className="col">
                <p className="text-dark fw-semibold">{data.title}</p>
                <div className=" mt-2">
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
        <OrderPayment
          price={carDetail.price}
          category={carDetail.category}
          nameCar={carDetail.name}
          daysRent={daysRent}
          totalPrice={totalPrice}
        />
      </div>
    </>
  );
};

export default OrderDetail;
