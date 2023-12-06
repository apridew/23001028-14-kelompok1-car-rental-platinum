import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarDetail from "../../components/CarDetail";
import CarDetailResult from "../../components/CarDetailResult";

const DetailCarPage = () => {
  return (
    <>
      <Navbar />
      <CarDetailResult />
      <CarDetail />
      <Footer />
    </>
  );
};
export default DetailCarPage;
