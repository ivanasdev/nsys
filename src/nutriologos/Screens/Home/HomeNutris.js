import React from "react";
import ic1 from "../../../assets/icons/nutrition.png";
import Navbar from "../../components/Navbar";
import Contactanos from "../Formularios/Contactanos";

const HomeNutris = () => {
  return (
    <div>
      <Navbar />
      <div className="cardhome1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <p className="h22">
                Software especializado en Nutri&oacute;logos
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div>
                  <p className="h2">Colocaci&oacute;n de pacientes</p>
                  <img className="icon1" src={ic1} />
                </div>
              </div>
   

              <div class="col">
              <div>
                <p className="h2">Sistema web completo y facil de usar </p>
                <img className="icon1" src={ic1} />
              </div>
              </div>

              <div class="col">
                <div>
                  <p className="h2">App movil para ti y todos tus pacientes </p>
                  <img className="icon1" src={ic1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div><p className="h22">Contactanos</p></div>
        <Contactanos/>


      </div>
    </div>
  );
};

export default HomeNutris;


