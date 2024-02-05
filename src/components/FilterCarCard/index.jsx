import "./style.css";
import { Link } from "react-router-dom";
import * as formater from "../../helpers/formaters";

const FilterCarCard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-12 frame-card">
        <img className="img-fluid" src={props.all.image} alt={props.all.name} />
        <div className="card-content">
          <p>{props.all.name}</p>
          <h5>{formater.idrFormater(props.all.price)} /hari</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link onClick={formater.scrollTop} to={`/detail-car/${props.all.id}`}>
            <button>Pilih Mobil</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilterCarCard;
