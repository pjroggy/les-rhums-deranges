import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ links }) {
  return (
    <header>
      <h2 className="header-title">Les Rhums Dérangés</h2>
      <img src="./src/assets/icones/yellowBaril.png" alt="baril jaune" className="header-image"/>
      <nav role="navigation">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={link.className}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
