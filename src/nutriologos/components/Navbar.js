import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="iconNav" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
      

            <li className="nav-item">
              <a className="nav-link" href="#">
                Software
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aplicacion Movil
              </a>
            </li>

            <Link to="/paquetes">
            <li className="nav-item">
              <a className="nav-link" href="#">
              Nuestros paquetes
              </a>
            </li>
            </Link>
            <Link to="/loginnutriologos">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Iniciar sesi&oacute;n
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
