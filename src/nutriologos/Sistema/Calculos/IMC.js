import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const initialstate = {
  peso: "",
  altura: "",
};

const IMC = () => {
  const [state, setState] = useState(initialstate);
  const { peso, altura } = state;
  const indicemcRef = useRef(0); 
  const FlagIcm = useRef("");
  const [flagresult,setFlagresult]=useState(false)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const calcularIMC = (peso, altura) => {
    const areaEnCm2 = altura * altura;
    const imc = peso / areaEnCm2;
    indicemcRef.current = imc.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularIMC(peso, altura);
    console.log(indicemcRef.current);
    if(indicemcRef.current>0){
        setFlagresult(true)
    }

    if ( indicemcRef.current < 18.5) {
        FlagIcm.current = "Peso Bajo";
      } else if ( indicemcRef.current >= 18.5 &&  indicemcRef.current <= 24.99) {
        FlagIcm.current = "Peso Normal";
      } else if ( indicemcRef.current >= 25 &&  indicemcRef.current <= 29.99) {
    FlagIcm.current = "Sobrepeso";
      } else if ( indicemcRef.current >= 30 &&  indicemcRef.current <= 34.99) {
        FlagIcm.current ="Obesidad Leve";
      } else if ( indicemcRef.current >= 35 &&  indicemcRef.current <= 39.99) {
        FlagIcm.current ="Obesidad Media";
      } else {
        FlagIcm.current ="Obesidad Mórbida";
      }
    
    

  };

  return (
    <div>
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
                      className="form-control inputform"
                      id="peso"
                      name="peso"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <label className="h2" htmlFor="peso">
                      Altura(cm)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control inputform"
                      id="altura"
                      name="altura"
                      onChange={handleInput}
                    />
                  </div>

                  <button className="btn">Calcular</button>
                </form>
              </div>
            </div>

   {flagresult ? 
(   <div className="col-md-6 d-flex align-items-center justify-content-center ">
<div className="texto cardharrys">
  <h2 className="h22">Resultados del calculo: </h2>
  <div>
    <h2>Indice de masa corporal:</h2>
    <h5>{ indicemcRef.current}</h5>
    <h2>Condicion</h2>
    <h5>{FlagIcm.current}</h5>
  </div>
</div>
</div>)
:
(null)

}
           
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMC;
