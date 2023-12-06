import Button from "../Button";
import "./style.css";

const CTABanner = () => {
  return (
    <section id="cta-banner">
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex flex-column align-items-center text-center px-5">
            <h1>Sewa Mobil di Jakarta Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button name="Mulai Sewa Mobil" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
