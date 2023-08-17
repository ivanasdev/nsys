import React from "react";

const SignupNutriologos = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Registro</h3>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="col">
                <label htmlFor="ap" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ap"
                  placeholder="Ingresa tu apellido paterno"
                />
              </div>
              <div className="col">
                <label htmlFor="am" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="am"
                  placeholder="Ingresa tu apellido materno"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">
                Celular
              </label>
              <input
                type="text"
                className="form-control"
                id="celular"
                placeholder="Ingresa tu número de celular"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Ingresa tu título"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="calle" className="form-label">
                Calle
              </label>
              <input
                type="text"
                className="form-control"
                id="calle"
                placeholder="Ingresa tu calle"
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="next" className="form-label">
                  Número Exterior
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="next"
                  placeholder="Ingresa tu número exterior"
                />
              </div>
              <div className="col">
                <label htmlFor="nint" className="form-label">
                  Número Interior
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nint"
                  placeholder="Ingresa tu número interior"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="colonia" className="form-label">
                Colonia
              </label>
              <input
                type="text"
                className="form-control"
                id="colonia"
                placeholder="Ingresa tu colonia"
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="codigopostal" className="form-label">
                  Código Postal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="codigopostal"
                  placeholder="Ingresa tu código postal"
                />
              </div>
              <div className="col">
                <label htmlFor="alcaldia" className="form-label">
                  Alcaldía
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alcaldia"
                  placeholder="Ingresa tu alcaldía"
                />
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupNutriologos;
