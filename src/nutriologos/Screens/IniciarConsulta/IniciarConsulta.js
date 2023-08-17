import React from "react";
import { Link } from "react-router-dom";

import icon1 from "../../../assets/icons/calendario.png";
import icon2 from "../../../assets/icons/informacion.png";
import icon3 from "../../../assets/icons/user-avatar.png";
import icon4 from "../../../assets/icons/usuario.png";

const IniciarConsulta = () => {
  
  const id_NutriologoSys = localStorage.getItem('id_NutriologoSys');
  const st_Apnutri = localStorage.getItem('st_Apnutri');
  const st_Amnutri = localStorage.getItem('st_Amnutri');
  const st_Nombrenutri = localStorage.getItem('st_Nombrenutri');
 

   

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="h22">Iniciar Consulta {st_Nombrenutri}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4">
            <Link
              to="/nuevopaciente">
              <button className="btn btn-menu">
                <p className="txtbtn">Nuevo Paciente</p>
                <img src={icon4} className="iconmenucosulta" />
              </button>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to="/buscarpaciente">
              <button className="btn btn-menu">
                Mis Pacientes
                <img src={icon3} className="iconmenucosulta" />
              </button>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <button className="btn btn-menu">
              <p className="txtbtn">
                Citas
                <img src={icon1} className="iconmenucosulta" />
              </p>
            </button>
          </div>
          <div className="col-6 col-md-4">
            <button className="btn btn-menu">
              <p className="txtbtn">Dietas</p>
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button className="btn btn-menu">
              <p className="txtbtn">Historial clinico</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarConsulta;
