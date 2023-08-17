import React, { useState } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import IniciarConsulta from "../../Screens/IniciarConsulta/IniciarConsulta";


const HomeLogged = () => {



    const id_NutriologoSys = localStorage.getItem('id_NutriologoSys');
    const st_Apnutri = localStorage.getItem('st_Apnutri');
    const st_Amnutri = localStorage.getItem('st_Amnutri');
    const st_Nombrenutri = localStorage.getItem('st_Nombrenutri');
   
  




  

  return (
    <div className="cardhome1">
      <Navbar />
      <p className="h22">Bienvenida {st_Nombrenutri} {st_Apnutri}</p>

      <IniciarConsulta />

      <div className="cardhome1">
        <div>
          <p>Mis citas</p>
        </div>
      </div>

      <div className="cardhome1">
        <div>
          <p>Proximas citas</p>
        </div>
      </div>

      <div className="cardhome1">
        <div>
          <p>Proximas citas</p>
        </div>
      </div>
    </div>
  );
};

export default HomeLogged;
