import { useEffect, useState } from "react";
import axios from "axios";
import * as formater from "../../helpers/formaters";
import MyDocumentPDF from "../../components/MyDocumentPDF";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PDFViewer } from "@react-pdf/renderer";

const PdfPreviewPage = () => {
  const [carDetail, setCarDetail] = useState({});
  const [orderData, setOrderData] = useState({});
  const [userData, setUserData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    handleGetOrderDetail();
  }, []);

  const handleGetOrderDetail = async () => {
    const token = localStorage.getItem("token")
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

  return (
    <>
      <Navbar />
      <div className="mt-5 pt-3">
        <PDFViewer width="100%" height="600px">
          <MyDocumentPDF
            invoice={`#${id}-${orderData.CarId}`}
            email={userData.email}
            carName={carDetail.name}
            capacity={formater.categoryTextFormater(carDetail.category)}
            rent={`${formater.dateFormater(
              orderData.start_rent_at
            )} - ${formater.dateFormater(orderData.finish_rent_at)}`}
            total={`${daysRent} days x ${formater.idrFormater(
              carDetail.price
            )} = ${formater.idrFormater(totalPrice)}`}
          />
        </PDFViewer>
      </div>
      <Footer />
    </>
  );
};
export default PdfPreviewPage;
