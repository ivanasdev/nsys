import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(

   
      <nav className="navbar navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Gretchen Hartz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/iniciarconsulta">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Iniciar Consulta</a>
            </li>
            </Link>


      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Calculos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/harrysm">
            <li><a className="dropdown-item" href="#">Harrys Mujeres</a></li>
            </Link>
            <Link to="/harrysh">
            <li><a className="dropdown-item" href="#">Harrys Hombres</a></li>
            </Link>
            <Link to="/imc">
            <li><a className="dropdown-item" href="#">IMC</a></li>
            </Link>
            <li><a className="dropdown-item" href="#">Equivalencias</a></li>
          </ul>
        </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Citas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mis pacientes</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Mi cuenta</a>
            </li>
 
          </ul>
        </div>
      </div>
    </nav>


    )
}

export default Navbar