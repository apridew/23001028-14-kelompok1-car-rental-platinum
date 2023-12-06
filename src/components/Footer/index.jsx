import { HashLink } from "react-router-hash-link";
import "./style.css";

const icons = [{ icon: "bi bi-facebook" }, { icon: "bi bi-instagram" }, { icon: "bi bi-twitter" }, { icon: "bi bi-envelope" }];

const scrollTop = () => {
  window.scrollTo(0, 0);
};
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <ul className="gap-lg-3 gap-md-3 gap-sm-0 p-0">
              <li className="nav-item">
                <HashLink smooth={true} to={"/#our-services"} className="nav-link active" aria-current="page">
                  Our Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth={true} to={"/#why-us"} className="nav-link">
                  Why Us
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth={true} to={"/#testimonial"} className="nav-link">
                  Testimonial
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth={true} to={"/#faq"} className="nav-link">
                  FAQ
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <p>Connect with us</p>
            <div className="d-flex flex-wrap gap-3 pb-4">
              {icons.map((icons, id) => (
                <a href="/" key={id}>
                  <i className={icons.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 pb-5">
            <p>Copyright Binar 2023</p>
            <HashLink onClick={scrollTop} to={"/"} className="navbar-brand fw-bold">
              Binar Car
            </HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
