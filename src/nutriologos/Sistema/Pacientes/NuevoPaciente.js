import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 
import { v4 as uuidv4 } from "uuid";
import { URINEWPACIENTE } from "../../env";

import axios from "axios";

const initialstate = {
  idPacienteSys: "",
  nombre: "",
  paterno: "",
  materno: "",

  email: "",
  celular: "",
  fechanac: "",

  nacionalidad: "",
  genero: "",
  id_Nutriologo: "",
};

const NuevoPaciente = () => {

  const idNutriologoSys = localStorage.getItem('id_NutriologoSys');
  const st_Apnutri = localStorage.getItem('st_Apnutri');
  const st_Amnutri = localStorage.getItem('st_Amnutri');
  const st_Nombrenutri = localStorage.getItem('st_Nombrenutri');
 



  const navigate = useNavigate(); 
  const [state, setState] = useState(initialstate);
  const idPacienteSysRef = useRef(null); 


  const {
    nombre,
    paterno,
    materno,
    email,
    celular,
    fechanac,
    nacionalidad,
    genero,
  } = state;

  const idPacienteSystem = () => {
    const uniqueId = uuidv4(); // Genera un identificador único
    idPacienteSysRef.current = uniqueId;  
    localStorage.setItem("idPacienteSys", idPacienteSysRef.current);
  };

  idPacienteSystem()  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(
      idPacienteSysRef.current,
      nombre,
      paterno,
      materno,
      email,
      celular,
      fechanac,
      nacionalidad, 
      genero,
      idNutriologoSys
);

    const datos = {
      idPacienteSys: idPacienteSysRef.current,
      nombre,
      paterno,
      materno,
      email,
      celular,
      fechanac,
      nacionalidad,
      genero,
      idNutriologoSys,
    }; 
    try {
      const response = await axios.post(URINEWPACIENTE, datos);
      console.log('Respuesta del servidor:', response.data);

      // Redirecciona al componente deseado en caso de respuesta positiva
      if (response.data["affectedRows"] === 1 ) {
     
        navigate(`/nuevohistorial?idPacienteSys=${idPacienteSysRef.current}`);
      }
    } catch (error) {
      alert('Error al enviar los datos:', error);
    }




  };

  return (
    <div className="">
      <Navbar />

      <div className="container-fluid ">
        <div className="cardhome1">
          <h2>Registrar Paciente</h2>

          <p>Nutriologo: </p>

          <form className="row g-3 cardhome1" onSubmit={handleSubmit}>
            <div className="col-12 col-sm-4 ">
              <label className="h2" htmlFor="nombre ">
                Nombre
              </label>

              <input
                type="text"
                className="form-control inputform"
                id="nombre"
                name="nombre"
                onChange={handleInput}
              />
            </div>

            <div className="col-12 col-sm-4">
              <label className="h2" htmlFor="paterno">
                Apellido Paterno
              </label>
              <input
                type="text"
                className="form-control inputform"
                id="paterno"
                name="paterno"
                onChange={handleInput}
              />
            </div>

            <div className="col-12 col-sm-4">
              <label className="h2" htmlFor="paterno">
                Apellido Materno
              </label>
              <input
                type="text"
                className="form-control inputform"
                id="materno"
                name="materno"
                onChange={handleInput}
              />
            </div>

            <div className="col-12 col-sm-4">
              <label className="h2" htmlFor="paterno">
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control inputform"
                id="email"
                name="email"
                onChange={handleInput}
              />
            </div>

            <div className="col-12 col-sm-3">
              <label className="h2" htmlFor="paterno">
                Celular
              </label>
              <input
                type="phone"
                className="form-control inputform"
                id="celular"
                name="celular"
                onChange={handleInput}
              />
            </div>

            <div className="col-6 col-sm-4">
              <label className="h2" htmlFor="fechanac">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                className="form-control inputform"
                id="fechanac"
                name="fechanac"
                onChange={handleInput}
              />
            </div>

            <div className="col-6 col-sm-4">
              <label className="h2" htmlFor="nacionalidad">
                Nacionalidad
              </label>
              <input
                type="text"
                className="form-control inputform"
                id="nacionalidad"
                name="nacionalidad"
                onChange={handleInput}
              />
            </div>

            <div className="col-6 col-sm-4">
              <label className="h2" htmlFor="genero">
                Genero
              </label>
              <select
                className="form-control inputform"
                id="genero"
                name="genero"
                value={genero}
                onChange={handleInput}
              >
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="no-binario">No-Binario</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NuevoPaciente;
