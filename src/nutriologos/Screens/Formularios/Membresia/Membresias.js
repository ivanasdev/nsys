import React from 'react';
import Navbar from '../../../components/Navbar';


const Membresias = () => {


  return (
 <div>
    <Navbar/>
    <div className="container mt-5">
      <div className="row">

          <div className="col-md-4 mb-4" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Paquete Inicial</h5>
                <p className="card-text">Todas las Herramientas para comenzar a dar tus consultas y dietas</p>
                <h2 className="card-text">$299/mes</h2>
                <h6>$2800 anual</h6>
                <button className="btn btn-primary">Agregar al carrito</button>
                <h5 className="card-body">Caracteristicas</h5>
                <p className="card-text">Acceso al software y a la aplicacion </p>
                <p className="card-text">Dietas personalizadas </p>
                <p className="card-text">Da de alta hasta 100 pacientes </p>
     

              </div>
            </div>
          </div>


          <div className="col-md-4 mb-4" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Paquete Profecional</h5>
                <p className="card-text">Todas las Herramientas para comenzar a dar tus consultas y dietas</p>
                <h2 className="card-text">$499/mes</h2>
                <button className="btn btn-primary">Agregar al carrito</button>
                <h5 className="card-body">Caracteristicas</h5>
                <p className="card-text">Acceso al software y a la aplicacion </p>
                <p className="card-text">Dietas personalizadas </p>
                <p className="card-text">Da de alta hasta 100 pacientes </p>
     

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Paquete Empresas</h5>
                <p className="card-text">Todas las Herramientas para comenzar a dar tus consultas y dietas</p>
                <h2 className="card-text">$499/mes</h2>
                <button className="btn btn-primary">Agregar al carrito</button>
                <h5 className="card-body">Caracteristicas</h5>
                <p className="card-text">Acceso al software y a la aplicacion </p>
                <p className="card-text">Dietas personalizadas </p>
                <p className="card-text">Da de alta hasta 100 pacientes </p>
     

              </div>
            </div>
          </div>
 
      </div>
    </div>
 </div>
  );
};

export default Membresias;
