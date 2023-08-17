import React, { useState } from "react";

import { ANTEPP } from "../../env";
import axios from "axios";
const AntecedentesPP = () => {
  const idNutriologoSys = localStorage.getItem("id_NutriologoSys");
  const st_Apnutri = localStorage.getItem("st_Apnutri");
  const st_Amnutri = localStorage.getItem("st_Amnutri");
  const st_Nombrenutri = localStorage.getItem("st_Nombrenutri");
  const id_PacienteSys = localStorage.getItem("idPacienteSys");

  const [alergiasalimentos, setAlergiasalimentos] = useState("");
  const [alergiasmedicinas, setAlergiasmedicinas] = useState("");

  const [consumeAlcohol, setConsumeAlcohol] = useState(false);
  const [consumeTabaco, setConsumeTabaco] = useState(false);
  const [consumeCafeina, setConsumeCafeina] = useState(false);
  const [consumeDrogas, setConsumeDrogas] = useState(false);

  const [tipoAlcohol, setTipoAlcohol] = useState("");
  const [frecuenciaAlcohol, setFrecuenciaAlcohol] = useState("");
  const [cantidadAlcohol, setCantidadAlcohol] = useState("");

  const [tipoTabaco, setTipoTabaco] = useState("");
  const [frecuenciaTabaco, setFrecuenciaTabaco] = useState("");
  const [cantidadTabaco, setCantidadTabaco] = useState("");

  const [tipoCafeina, setTipoCafeina] = useState("");
  const [frecuenciaCafeina, setFrecuenciaCafeina] = useState("");
  const [cantidadCafeina, setCantidadCafeina] = useState("");

  const [tipoDrogas, setTipoDrogas] = useState("");
  const [frecuenciaDrogas, setFrecuenciaDrogas] = useState("");
  const [cantidadDrogas, setCantidadDrogas] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario y guardar los datos.
    console.log({

        idNutriologoSys,
        id_PacienteSys,
        alergiasalimentos,
        alergiasmedicinas,
        consumeAlcohol,
        tipoAlcohol,
        frecuenciaAlcohol,
        cantidadAlcohol,
        consumeTabaco,
        tipoTabaco,
        frecuenciaTabaco,
        cantidadTabaco,
        consumeCafeina,
        tipoCafeina,
        frecuenciaCafeina,
        cantidadCafeina,
        consumeDrogas,
        tipoDrogas,
        frecuenciaDrogas,
        cantidadDrogas,
      });

    const datos = {
      idNutriologoSys,
      id_PacienteSys,
      alergiasalimentos,
      alergiasmedicinas,
      consumeAlcohol,
      tipoAlcohol,
      frecuenciaAlcohol,
      cantidadAlcohol,
      consumeTabaco,
      tipoTabaco,
      frecuenciaTabaco,
      cantidadTabaco,
      consumeCafeina,
      tipoCafeina,
      frecuenciaCafeina,
      cantidadCafeina,
      consumeDrogas,
      tipoDrogas,
      frecuenciaDrogas,
      cantidadDrogas,
    };
    try {
      const response = await axios.post(ANTEPP, datos);
      console.log(response.data);
      if (response.data["affectedRows"] === 1) {
        alert("Exito ANTPP");
      }
    } catch (error) {
      alert("Hubo un error");
    }
  };
  return (
    <div className="container-fluid">
      <div className="cardhome1">
        <div className="row">
          <div className="col">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="alergias">
                    <p className="h2">Alergias o intolerancia a alimentos</p>
                  </label>
                  <textarea
                    className="form-control"
                    id="alergiasalimentos"
                    name="alergiasalimentos"
                    value={alergiasalimentos}
                    onChange={(e) => setAlergiasalimentos(e.target.value)}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="alergias">
                    <p className="h2">Alergias o intolerancia a medicamentos</p>
                  </label>
                  <textarea
                    className="form-control"
                    id="alergiasmedicinas"
                    name="alergiasmedicinas"
                    value={alergiasmedicinas}
                    onChange={(e) => setAlergiasmedicinas(e.target.value)}
                    rows="3"
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <h2>Formulario de Consumo de Sustancias Bioquímicas</h2>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consumeAlcohol"
                        checked={consumeAlcohol}
                        onChange={(e) => setConsumeAlcohol(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="consumeAlcohol"
                      >
                        Alcohol
                      </label>
                      {consumeAlcohol && (
                        <div className="form-group">
                          <label>Tipo:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={tipoAlcohol}
                            onChange={(e) => setTipoAlcohol(e.target.value)}
                          />
                          <label>Frecuencia:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={frecuenciaAlcohol}
                            onChange={(e) =>
                              setFrecuenciaAlcohol(e.target.value)
                            }
                          />
                          <label>Cantidad:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={cantidadAlcohol}
                            onChange={(e) => setCantidadAlcohol(e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consumeTabaco"
                        checked={consumeTabaco}
                        onChange={(e) => setConsumeTabaco(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="consumeTabaco"
                      >
                        Tabaco
                      </label>
                      {consumeTabaco && (
                        <div className="form-group">
                          <label>Tipo:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={tipoTabaco}
                            onChange={(e) => setTipoTabaco(e.target.value)}
                          />
                          <label>Frecuencia:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={frecuenciaTabaco}
                            onChange={(e) =>
                              setFrecuenciaTabaco(e.target.value)
                            }
                          />
                          <label>Cantidad:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={cantidadTabaco}
                            onChange={(e) => setCantidadTabaco(e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consumeCafeina"
                        checked={consumeCafeina}
                        onChange={(e) => setConsumeCafeina(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="consumeCafeina"
                      >
                        Bebidas con Cafeína
                      </label>
                      {consumeCafeina && (
                        <div className="form-group">
                          <label>Tipo:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={tipoCafeina}
                            onChange={(e) => setTipoCafeina(e.target.value)}
                          />
                          <label>Frecuencia:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={frecuenciaCafeina}
                            onChange={(e) =>
                              setFrecuenciaCafeina(e.target.value)
                            }
                          />
                          <label>Cantidad:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={cantidadCafeina}
                            onChange={(e) => setCantidadCafeina(e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consumeDrogas"
                        checked={consumeDrogas}
                        onChange={(e) => setConsumeDrogas(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="consumeDrogas"
                      >
                        Drogas
                      </label>
                      {consumeDrogas && (
                        <div className="form-group">
                          <label>Tipo:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={tipoDrogas}
                            onChange={(e) => setTipoDrogas(e.target.value)}
                          />
                          <label>Frecuencia:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={frecuenciaDrogas}
                            onChange={(e) =>
                              setFrecuenciaDrogas(e.target.value)
                            }
                          />
                          <label>Cantidad:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={cantidadDrogas}
                            onChange={(e) => setCantidadDrogas(e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntecedentesPP;
