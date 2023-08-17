import React, { useState,useRef } from "react";

import Navbar from "../components/Navbar";
const initialstate = {
  peso: "",
  talla: "",
  edad: "",
  actividadf: "",
};
const HarrysM = () => {
  const [state, setState] = useState(initialstate);
  const { peso, talla, edad, actividadf } = state;

  const [metabolismo,setMetabolismo]=useState(0)
  const [gastoenergetico,setGastoEnergetico]=useState(0)
  const FaRef = useRef(0); // 1. Crear una referencia FaRef usando useRef


  const MetabolismoBasalMujer = (peso, talla, edad, actividadf) => {
    const p1 = 66;
    const p2 = 13.7;
    const p3 = 5;
    const p4 = 6.8;

    const mbr1 = p2 * parseInt(peso);
    const mbr2 = p3 * parseInt(talla);
    const mbr3 = p4 * parseInt(edad);

    const mb = p1 + mbr1 + mbr2 - mbr3;

    switch (actividadf) {
      case "sendentaria":
        FaRef.current = 1.2; 
        break;
      case "liviana":
        FaRef.current = 1.56; 
        break;
      case "moderada":
        FaRef.current = 1.64; 
        break;
      case "intensa":
        FaRef.current = 1.82; 
        break;

    }

    const getotal= mb  * FaRef.current

    console.log(mb+"MB")
    console.log(getotal+"GET")

    setMetabolismo(mb)
    setGastoEnergetico(getotal)





  };



  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    MetabolismoBasalMujer(peso, talla, edad,actividadf);

    //console.log(peso, talla, edad, actividadf, estres);
  };

  return (
    <div >
      <Navbar />
      <div className="container-fluid">

<div className="container-fluid">
  <h2 className="h2">Calculo de Harrys Hombres</h2>
  <div className="row ">

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="cardharrys">
              <h2 className=" h22 ">Ingresa los datos del paciente</h2>

              <form className="formjoin" onSubmit={handleSubmit}>
                <div className="col-12 col-sm-12">
                  <label className="h2" htmlFor="peso">
                    Peso(Kg)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control inputform"
                    id="peso"
                    name="peso"
                    onChange={handleInput}
                  />
                </div>

                <div className="col-12 col-sm-12">
                  <label className="h2" htmlFor="talla">
                    Talla(cm)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control inputform"
                    id="talla"
                    name="talla"
                    onChange={handleInput}
                  />
                </div>

                <div className="col-12 col-sm-12">
                  <label className="h2" htmlFor="edad">
                    Edad
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control inputform"
                    id="edad"
                    name="edad"
                    onChange={handleInput}
                  />
                </div>

                <div className="col-12 col-sm-12">
                  <label className="h2" htmlFor="actividadf">
                    Actividad Fisica
                  </label>
                  <select
                    className="form-control inputform"
                    id="actividadf"
                    name="actividadf"
                    value={actividadf}
                    onChange={handleInput}
                  >
                    <option value="">Seleccionar</option>
                    <option value="sedentaria">Sedentaria</option>
                    <option value="liviana">Liviana</option>
                    <option value="moderada">Moderada</option>
                    <option value="intensa">Intensa</option>
                  </select>
                </div>

                <button className="btn btnharrys">Calcular</button>
              </form>
            </div>
          </div>

        {metabolismo ?
        (
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <div className="texto cardharrys">
              <h2 className="h22">Resultados del calculo: </h2>

              <div className="cardhome">
               <p className="h3"> <h2>Metabolismo Basal: {parseInt(metabolismo)}</h2> </p>
               <p className="h3" >Calorias para mantener el peso: {parseInt(gastoenergetico)}</p>
               <div>
               <p className="h3" >Calorias para adelgazar:</p>
               <p className="h3">-500={parseInt(gastoenergetico)-500} </p>
               <p className="h3">-700={parseInt(gastoenergetico) - 700}</p>
               </div>

               <div>
               <p className="h3" >Calorias para subir :</p>
               <p className="h3">+500={parseInt(gastoenergetico)+500} </p>
               <p className="h3">+700={parseInt(gastoenergetico) + 700}</p>
               </div>
              </div>
        
            </div>
          </div>
        )
        :
        (null)
    }


        </div>
      </div>
    </div>
    </div>
  );
};

export default HarrysM;
