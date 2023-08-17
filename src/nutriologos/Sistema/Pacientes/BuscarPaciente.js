import React from "react";
import Navbar from "../components/Navbar";

const BuscarPaciente = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <div className="cardhome1">
          <div className="row">
            <div className="col">
           <p className="h2">   Buscar Paciente</p>
              <div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre o Id del paciente "
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">Mis Pacientes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarPaciente;
