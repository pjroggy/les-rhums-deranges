import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./RecepieList.scss";

function RecepieList({ recepies }) {
  return (
    <ul className="recepie-list">
      {recepies.map((recepie) => (
        <li className="link" key={recepie.id}>
          <Link  to={`/recette/${recepie.id}`}>
            <img className="illustration" src={recepie.illustration} alt="illustration recette" />
            {recepie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

RecepieList.propTypes = {
  recepies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecepieList;
