import "bootstrap/js/src/collapse.js";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-semi-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fa fa-bars fa-1x"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-6 main-menu">
            <li>
              <a href="link" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="link">CATÁLOGO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
