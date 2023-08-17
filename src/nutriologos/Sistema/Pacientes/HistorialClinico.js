import React, { useEffect, useState } from "react";
import qs from "qs";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { URIPACINENTEDATA } from "../../env";
import AntecentesPatologicos from "../HistorialClinico/AntecedentesPatologicos";
import Navbar from "../components/Navbar";
import AntecedentesPP from "../HistorialClinico/AntecedentesPP";

const Nuevohistorial = (props) => {
  
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const idPacienteSys = params.idPacienteSys;
  const FlagAPat=params.flagAp

  const [nombre, setNombre] = useState("");
  const [ap, setAp] = useState("");
  const [am, setAm] = useState("");
  const [id_Nutriologo,setId_Nutriologo]=useState("");

  const GetDataPaciente = async () => {
    const datasend = { idPacienteSys };
    try {
      const response = await axios.post(URIPACINENTEDATA, datasend);
      console.log(response.data);
      const { st_Am, st_Ap, st_Nombre, id_NutriologoSys} = response.data[0];
      setNombre(st_Nombre);
      setAp(st_Ap);
      setAm(st_Am);
      setId_Nutriologo(id_NutriologoSys);
    } catch (error) {
      alert("Error al enviar los datos: " + error);
    }
  };

  useEffect(() => {
    GetDataPaciente();
  }, []); // Ejecuta GetDataPaciente al montar el componente

  return (
    <div> 
        <Navbar/>
    <div className="container-fluid">
    
      <div className="row">
        <div className=" col-12 col-md-12">
          <div className="row ">
            <div className="col-12 col-md-12">
              <h1> Nuevo Historial Clinico</h1>
            </div>

            {FlagAPat ? 
            (<AntecedentesPP/>)
            :
            (<AntecentesPatologicos id_Nutriologo={id_Nutriologo} idPacienteSys={idPacienteSys} />)
            }

            < div className="col-6 col-md-6">
              <h5>
                Nombre del paciente: {nombre} {ap} {am}
              </h5>
            </div>
            <div className="col-6 col-md-6">
            
              <h5>ID Paciente: {idPacienteSys}</h5>
            </div>

            <div className="col-6 col-md-6">3</div>
            <div className="col-6 col-md-6">4</div>
            <div className="col-6 col-md-6">5</div>
            <div className="col-6 col-md-6">6</div>
            <div className="col-6 col-md-6">7</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nuevohistorial;
