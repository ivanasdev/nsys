import React from "react";

const Navbar = ()=>{
    return(
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Nuestros Nutriologos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Cerca de ti</a>
            </li>


   
            <li className="nav-item">
              <a className="nav-link" href="#">Por especialidad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Buscar</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    )
}

export default Navbar