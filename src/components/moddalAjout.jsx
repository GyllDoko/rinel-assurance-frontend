import React, { useState } from "react";
import axios from "axios";
import AjoutVoiture from "../components/ajoutVoiture";
// import Ajoutassureur from './ajoutassureur'
import AjoutContrat from "./ajoutContrat";
import { connect } from "react-redux";

const ModdalAjout = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [profession, setProfession] = useState("");
  const [carname, setCarname] = useState("");
  const [matriculation, setMatriculation] = useState("");
  const [date_of_visit, setDate_of_visit] = useState(null);
  const [date_of_next_visit, setDate_of_next_visit] = useState(null);
  const [visited, setVisited] = useState(true);
  const [adresse, setAdresse] = useState("");
  const [couleur, setCouleur] = useState("");
  // const [asssuranceAgency, setAsssuranceAgency] = useState("")
  // const [asssuranceAgencyMother, setAsssuranceAgencyMother] = useState("")
  // const [asssuranceAddress, setAsssuranceAddress] = useState("")
  // const [asssuranceManager, setAsssuranceManager] = useState("")
  // const [asssurancePhone, setAsssurancePhone] = useState(0)
  const [contratStart, setContratStart] = useState(null);
  const [contratExpire, setContratExpire] = useState(null);
  const [contratDuration, setContratDuration] = useState("");
  const [onpause, setOnpause] = useState(false);
  const [naissance, setNaissance] = useState(null);

  // const [addCarTab, setAddCarTab] = useState([])
  // const [grey_card, setGrey_card] = useState(null)
  const [filename, setFilename] = useState("");
  const onSelectHandle = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setVisited(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let assuranceData = {
    //     agency: asssuranceAgency,
    //     ageny_mother: asssuranceAgencyMother,
    //     address: asssuranceAddress,
    //     manager: asssuranceManager,
    //     phone_number: asssurancePhone
    // }
    let contratData = {
      start: contratStart,
      end: contratExpire,
      duration: contratDuration,
      onPause: onpause,
    };
    let cardata = [
      {
        name: carname,
        color: couleur,
        matriculation: matriculation,
        date_of_visit: date_of_visit,
        date_of_next_visit: date_of_next_visit,
        visited: visited,
        grey_card: filename,
        // assurer: assuranceData,
        contrat: contratData,
      },
    ];

    const data = [
      {
        asureur_id: props.user.user.assureur.id ,
        name: name,
        surname: surname,
        phone_number: phone_number,
        profession: profession,
        addresse: adresse,
        birthday: naissance,
        cars: cardata,
      },
    ];

    axios.post("assureur/", data).then((res) => {
      if (res.data) {
        props.history.push({
          pathname: "/home",
        });
      } else {
        console.log(res.data);
        // alert("veuillez correctement remplir les champs !")
      }
    });
  };
  return (
    <div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-uppercase mb-3 ">Ajouter un client</h3>
              <hr />
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row  mb-3" style={{ textAlign: "start" }}>
                  <h5>Information concernant le client</h5>
                </div>

                <div class="mb-3 row">
                  <label
                    for="example-text-input"
                    class="col-md-2 col-form-label"
                  >
                    Nom
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="veuillez entrer le nom.."
                      id="example-text-input"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="example-text-input"
                    class="col-md-2 col-form-label"
                  >
                    Prénom
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setSurname(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="veuillez entrer le prénom.."
                      id="example-text-input"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="example-text-input"
                    class="col-md-2 col-form-label"
                  >
                    Profession
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setProfession(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="veuillez entrer la profession.."
                      id="example-text-input"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="example-tel-input"
                    class="col-md-2 col-form-label"
                  >
                    Telephone
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setPhone_number(e.target.value)}
                      class="form-control"
                      type="tel"
                      placeholder="Enter un numéro de  Telephone"
                      id="example-tel-input"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="example-text-input"
                    class="col-md-2 col-form-label"
                  >
                    Adresse
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setAdresse(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="veuillez entrer l'adresse.."
                      id="example-text-input"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="example-text-input"
                    class="col-md-2 col-form-label"
                  >
                    Date de Naissance
                  </label>
                  <div class="col-md-10">
                    <input
                      onChange={(e) => setNaissance(e.target.value)}
                      class="form-control"
                      type="date"
                      placeholder="veuillez entrer l'adresse.."
                      id="example-text-input"
                    />
                  </div>
                </div>

                <AjoutVoiture
                  setCarname={setCarname}
                  setCouleur={setCouleur}
                  setMatriculation={setMatriculation}
                  setDate_of_visit={setDate_of_visit}
                  setDate_of_next_visit={setDate_of_next_visit}
                  onSelectHandle={onSelectHandle}
                  setFilename={setFilename}
                />
                {/* <Ajoutassureur   setAsssuranceAgency={setAsssuranceAgency} setAsssuranceAgencyMother={setAsssuranceAgencyMother} setAsssuranceAddress={setAsssuranceAddress} setAsssuranceManager={setAsssuranceManager} setAsssurancePhone={setAsssurancePhone} /> */}
                <AjoutContrat
                  setOnpause={setOnpause}
                  setContratStart={setContratStart}
                  setContratDuration={setContratDuration}
                  setContratExpire={setContratExpire}
                />
                {/* {addCarTab} */}
                <div className="">
                  <div class="m-2 float-end">
                    {/* <a href onClick={()=>onCarAdd()}  class="btn btn-warning mx-3 waves" style={{color:"black", cursor:'pointer'}} >Ajouter un autre véhicule</a> */}
                    <button type="submit" class="btn btn-primary ">
                      Enregistrer l'usager
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
const mapStateToProps = (state)=>{
    return {
        'user': state.user.user
    }
        
}
export default connect(mapStateToProps) (ModdalAjout)
