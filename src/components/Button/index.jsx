import { Link } from "react-router-dom";
import "./style.css";

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const Button = (props) => (
  <div className="button-primary">
    <Link onClick={scrollTop} to={"/search-car"}>
      <button type="button" className="btn btn-success border-0 hidden-button">
        {props.name}
      </button>
    </Link>
  </div>
);

export default Button;
