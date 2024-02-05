import "./style.css";
import { Link } from "react-router-dom";
import * as formater from "../../helpers/formaters";

const Button = (props) => (
  <div className="button-primary">
    <Link onClick={formater.scrollTop} to={props.link}>
      <button type="button" className="btn btn-success border-0 hidden-button">
        {props.name}
      </button>
    </Link>
  </div>
);

export default Button;
