import React, { useState } from "react";
import { NUTRILOG } from "../../env";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const initialstate = {
  email: "",
  password: "",
};

const LoginNutriologos = () => {
  const [state, setState] = useState(initialstate);

  const { email, password } = state;
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    //console.log(email,password)

    const data = { email, password };

    try {
      const response = await axios.post(NUTRILOG, data);
      console.log("Respuesta del servidor:", response.data);
      console.log("Respuesta length:", response.data.length);
      const { id_NutriologoSys, st_Ap, st_Am, st_Nombre } = response.data[0];

      //LOCALSTORAGE
      // Store data in local storage
      localStorage.setItem("id_NutriologoSys", id_NutriologoSys);
      localStorage.setItem("st_Apnutri", st_Ap);
      localStorage.setItem("st_Amnutri", st_Am);
      localStorage.setItem("st_Nombrenutri", st_Nombre);

      // Redirecciona al componente deseado en caso de respuesta positiva
      if (response.data.length == 1) {
        alert("Inicio exitoso");

        navigate(
          `/homenutriologos`
        );
      }
    } catch (error) {
      alert("Usuario o clave no validas");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card cardhome">
        <div className="card-body">
          <h3 className="card-title text-center">Iniciar sesión</h3>
          <form onSubmit={HandleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control inputform"
                id="email"
                name="email"
                placeholder="Ingresa tu email"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control inputform"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={handleInput}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btnlogin">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginNutriologos;
