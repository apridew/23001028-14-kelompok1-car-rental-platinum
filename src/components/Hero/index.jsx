import "./style.css";
import carImage from "../../assets/img/hero/img_car.png";
import Button from "../Button";

const Hero = ({ showButtonRent }) => {
  return (
    <section id="hero">
      <div className="container-fluid ps-0">
        <div className="container-fluid wrapper-hero pe-0">
          <div className="row">
            <div className="col-md-12 col-lg-6 mt-5 hero-left d-flex flex-column justify-content-center">
              <h1>Sewa & Rental Mobil Terbaik di kawasan Jakarta</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                untuk sewa mobil selama 24 jam.
              </p>
              {showButtonRent && <Button name="Mulai Sewa Mobil" />}
            </div>
            <div className="col-md-12 col-lg-6 mt-lg-5 hero-right pe-0 ps-0 d-flex justify-content-end">
              <img className="img-fluid" src={carImage} alt="car" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
