import FilterCar from "../../components/FilterCar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const SearchCarPage = () => {
  return (
    <>
      <Navbar />
      <Hero showButtonRent={false} />
      <FilterCar />
      <Footer />
    </>
  );
};

export default SearchCarPage;
