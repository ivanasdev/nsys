import React, { useState } from "react";
import axios from "axios";
import { URIANTECE } from "../../env";
import { useNavigate } from "react-router-dom";

const initialstate = {
  diabetes: "",
  parentDiabetes: "",
  hipertension: "",
  parentHipertension: "",
  cancer: "",
  parentCancer: "",
  obecidad: "",
  parentObecidad: "",
  cardiopatias: "",
  parentCardiopatias: "",
  dislipidemias: "",
  parentDislipidemias: "",
  renal: "",
  parentRenal: "",
  hepatica: "",
  parentHepatica: "",
  endocrinoMetabolicas: "",
  parentEndocrinoMetabolicas: "",
  otras: "",
  parentOtras: "",
};

const AntecentesPatologicos = (props) => {


  const idNutriologoSys = localStorage.getItem('id_NutriologoSys');
  const st_Apnutri = localStorage.getItem('st_Apnutri');
  const st_Amnutri = localStorage.getItem('st_Amnutri');
  const st_Nombrenutri = localStorage.getItem('st_Nombrenutri');
 

  const navigate = useNavigate(); 

  const  idPacienteSys = props.idPacienteSys
  const  id_Nutriologo  = idNutriologoSys


  const [state, setState] = useState(initialstate);
  const [flagAP,setFlagAp]=useState(0)
  const {

    diabetes,
    parentDiabetes,
    hipertension,
    parentHipertension,
    cancer,
    parentCancer,
    obecidad,
    parentObecidad,
    cardiopatias,
    parentCardiopatias,
    dislipidemias,
    parentDislipidemias,
    renal,
    parentRenal,
    hepatica,
    parentHepatica,
    endocrinoMetabolicas,
    parentEndocrinoMetabolicas,
    otras,
    parentOtras,
  } = state;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      idPacienteSys,
      id_Nutriologo,
        diabetes,
        parentDiabetes,
        hipertension,
        parentHipertension,
        cancer,
        parentCancer,
        obecidad,
        parentObecidad,
        cardiopatias,
        parentCardiopatias,
        dislipidemias,
        parentDislipidemias,
        renal,
        parentRenal,
        hepatica,
        parentHepatica,
        endocrinoMetabolicas,
        parentEndocrinoMetabolicas,
        otras,
        parentOtras,
    );

    const datos = {
      idPacienteSys,
      id_Nutriologo,
        diabetes,
        parentDiabetes,
        hipertension,
        parentHipertension,
        cancer,
        parentCancer,
        obecidad,
        parentObecidad,
        cardiopatias,
        parentCardiopatias,
        dislipidemias,
        parentDislipidemias,
        renal,
        parentRenal,
        hepatica,
        parentHepatica,
        endocrinoMetabolicas,
        parentEndocrinoMetabolicas,
        otras,
        parentOtras
    };
    try{
      const response=await axios.post(URIANTECE,datos);
      console.log(response.data);
      if (response.data["affectedRows"] === 1 ){
        setFlagAp(1)
        alert("Sendme antecedentes personales");
        navigate(`/nuevohistorial?flagAp=${flagAP}&idPacienteSys=${idPacienteSys}`);
     
      }
    }
    catch(error){
      alert("Error al enviar campos")

    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-12 col-md-12">
          <div className="formap">
            

            <form className="row g-3 cardharrys" onSubmit={handleSubmit}>
            <h2>Antecedentes patol&oacute;gicos</h2>
             
             
              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="diabetes"
                      id="diabetes"
                      value="Diabetes"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Diabetes
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentDiabetes"
                    id="parentDiabetes"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hipertension"
                      id="hipertension"
                      value="Hipertension"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Hipertensi&oacute;n
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentHipertension"
                    id="parentHipertension"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="cancer"
                      id="cancer"
                      value="Cancer"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Cancer
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentCancer"
                    id="parentCancer"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="obecidad"
                      id="obecidad"
                      value="Obecidad"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Obecidad
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                   className="form-control inputform"
                    type="text"
                    name="parentObecidad"
                    id="parentObecidad"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="cardiopatias"
                      id="cardiopatias"
                      value="Cardiopatias"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Cardiopat&iacute;as
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentCardiopatias"
                    id="parentCardiopatias"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="dislipidemias"
                      id="dislipidemias"
                      value="Dislipidemias"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Dislipidemias
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentDislipidemias"
                    id="parentDislipidemias"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="renal"
                      id="renal"
                      value="Renal"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Enfermedad Renal
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentRenal"
                    id="parentRenal"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hepatica"
                      id="hepatica"
                      value="Hepatica"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Enfermedad Hep&aacute;tica
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentHepatica"
                    id="parentHepatica"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="endocrinoMetabolicas"
                      id="endocrinoMetabolicas"
                      value="EndocrinoMetabolicas"
                      onChange={handleInput}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      End&oacute;crino-Metab&oacute;licas
                    </label>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentEndocrinoMetabolicas"
                    id="parentEndocrinoMetabolicas"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 ">
                  <div class="form-control cardhome1">
                  <label className="form-label" >
                      Otras (Especificar)
                    </label>
                    <input
                         className="form-control inputform"
                      type="text"
                      name="otras"
                      id="otras"
           
                      onChange={handleInput}
                    />
                       <div className="col-12 col-md-12">
                  <input
                       className="form-control inputform"
                    type="text"
                    name="parentOtras"
                    id="parentOtras"
                    placeholder="Parentesco"
                    onChange={handleInput}
                  />
                </div>
                  </div>
                </div>

           
              </div>

              <div className="col-12 col-md-12">
                <button className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntecentesPatologicos;
