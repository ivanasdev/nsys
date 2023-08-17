import logo from "./logo.svg";
import "./App.css";
import Home from "./Web/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Web/components/NavBar";
import HomeNutris from "./nutriologos/Screens/Home/HomeNutris";
import Perfiles from "./Web/Screens/Perfiles/Perfiles";
import HomeLogged from "./nutriologos/Sistema/HomeLogged/HomeLogged";
import HarrysM from "./nutriologos/Sistema/Calculos/HarrysM";
import HarrysH from "./nutriologos/Sistema/Calculos/HarrysH";
import IMC from "./nutriologos/Sistema/Calculos/IMC";
import IniciarConsulta from "./nutriologos/Screens/IniciarConsulta/IniciarConsulta";
import NuevoPaciente from "./nutriologos/Sistema/Pacientes/NuevoPaciente";
import HistorialClinicoNew from "./nutriologos/Sistema/Pacientes/HistorialClinico";
import LoginNutriologos from "./nutriologos/Sistema/Login/Login";
import SignupNutriologos from "./nutriologos/Sistema/Subscripciones/Signup";
import Membresias from "./nutriologos/Screens/Formularios/Membresia/Membresias";
import BuscarPaciente from "./nutriologos/Sistema/Pacientes/BuscarPaciente";


function App() {
  return (
    <BrowserRouter>
      <div className="App parallax">
     

       <Routes>
        <Route exact path="/" Component={Home} />
        <Route path='/nutriologos' Component={HomeNutris} />
        <Route path='/perfiles' Component={Perfiles} />
        <Route path='/paquetes' Component={Membresias} />


        
        {/*Nutriologos*/}
        <Route path='/loginnutriologos' Component={LoginNutriologos} />
        <Route path='/signupnutriologos' Component={SignupNutriologos} />

        <Route path='/homenutriologos' Component={HomeLogged} />
        <Route path='/iniciarconsulta' Component={IniciarConsulta} />
        <Route path='/harrysm' Component={HarrysM} />
        <Route path='/harrysh' Component={HarrysH} />
        <Route path='/imc' Component={IMC} />
        <Route path='/nuevopaciente' Component={NuevoPaciente} />
        <Route path='/buscarpaciente' Component={BuscarPaciente} />

        <Route path='/nuevohistorial' Component={HistorialClinicoNew} />
        
      
        


        


       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
