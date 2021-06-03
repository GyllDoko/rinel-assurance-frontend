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
  const [subscribeDate, setSubscribeDate] = useState(null)
  const [userSet, setUserSet] = useState(false)
  const [carSet, setCarSet] = useState(false)
  const [contratSet, setContratSet] = useState(false)

  //reponse ids from partials save
  const [accountResponseId, setAccountResponseId] = useState("")
  const [carResponseId, setCarResponseId] = useState("")

  // const [addCarTab, setAddCarTab] = useState([])
  // const [grey_card, setGrey_card] = useState(null)
  const [filename, setFilename] = useState("");
  const onSelectHandle = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setVisited(false);
    }
  };
  const onUserSubmit = (event)=>{
    event.preventDefault()
    var data = [
      {
        asureur_id: props.user.assureur.id,
        user_id: props.user.user.id,
        name: name,
        surname: surname,
        phone_number: phone_number,
        profession: profession,
        addresse: adresse,
        birthday: naissance,
        // cars: cardata,
      },
    ];
    axios.post("assureur/save_user/", data).then((res) => {
      if (res.data.status) {
        setAccountResponseId(res.data.account_id)
        axios
          .post("assureur/update_accounts/", { username: props.user.user.username })
          .then((res) => {
            if (res.data.status) {
              var action = {
                value: res.data,
                type: "ADD_ACCOUNTS",
              };
              props.dispatch(action);
              // props.history.push({
              //   pathname: "/home",
              // });
            }
          })
          .catch((error) => console.error(error));
      } else {
        console.log(res.data);
        // alert("veuillez correctement remplir les champs !")
      }
    });

  }
  const onCarSubmit = (event) =>{
    event.preventDefault()
    let cardata = 
      {
        account_id: accountResponseId,
        name: carname,
        color: couleur,
        matriculation: matriculation,
        date_of_visit: date_of_visit,
        date_of_next_visit: date_of_next_visit,
        visited: visited,
        grey_card: filename,
        // assurer: assuranceData,
        // contrat: contratData,
      }
      axios.post("assureur/save_car/", cardata).then((res) => {
        if (res.data.status) {
          setCarResponseId(res.data.car_id)
          axios
            .post("assureur/update_accounts/", { username: props.user.user.username })
            .then((res) => {
              if (res.data.status) {
                var action = {
                  value: res.data,
                  type: "ADD_ACCOUNTS",
                };
                props.dispatch(action);
                // props.history.push({
                //   pathname: "/home",
                // });
              }
            })
            .catch((error) => console.error(error));
        } else {
          console.log(res.data);
          // alert("veuillez correctement remplir les champs !")
        }
      });
    

  }

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
      car_id: carResponseId,
      subscribe: subscribeDate,
      start: contratStart,
      end: contratExpire,
      duration: contratDuration,
      onPause: onpause,
    };
    // let cardata = [
    //   {
    //     name: carname,
    //     color: couleur,
    //     matriculation: matriculation,
    //     date_of_visit: date_of_visit,
    //     date_of_next_visit: date_of_next_visit,
    //     visited: visited,
    //     grey_card: filename,
    //     // assurer: assuranceData,
    //     contrat: contratData,
    //   },
    // ];

    // const data = [
    //   {
    //     asureur_id: props.user.assureur.id,
    //     user_id: props.user.user.id,
    //     name: name,
    //     surname: surname,
    //     phone_number: phone_number,
    //     profession: profession,
    //     addresse: adresse,
    //     birthday: naissance,
    //     cars: cardata,
    //   },
    // ];

    axios.post("assureur/save_contrat/", contratData).then((res) => {
      if (res.data) {
        axios
          .post("assureur/update_accounts/", { username: props.user.user.username })
          .then((res) => {
            if (res.data.status) {
              var action = {
                value: res.data,
                type: "ADD_ACCOUNTS",
              };
              props.dispatch(action);
              props.history.push({
                pathname: "/home",
              });
            }
          })
          .catch((error) => console.error(error));
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
              <form >
                {!userSet && <><div className="row  mb-3" style={{ textAlign: "start" }}>
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
                  <div className="">
                    <div class="m-2 float-end">
                      {/* <a href onClick={()=>onCarAdd()}  class="btn btn-warning mx-3 waves" style={{color:"black", cursor:'pointer'}} >Ajouter un autre véhicule</a> */}
                      <a href onClick={(e) => {onUserSubmit(e)
                      setUserSet(true)
                      }} class="btn btn-primary ">
                        Enregistrer le client
                    </a>
                    </div>
                  </div>
                </>}

                {userSet && !contratSet && <> <AjoutVoiture
                  setCarname={setCarname}
                  setCouleur={setCouleur}
                  setMatriculation={setMatriculation}
                  setDate_of_visit={setDate_of_visit}
                  setDate_of_next_visit={setDate_of_next_visit}
                  onSelectHandle={onSelectHandle}
                  setFilename={setFilename}
                /><div className="">
                    <div class="m-2 float-end">
                      {/* <a href onClick={()=>onCarAdd()}  class="btn btn-warning mx-3 waves" style={{color:"black", cursor:'pointer'}} >Ajouter un autre véhicule</a> */}
                      <a href onClick={(e) => {
                        onCarSubmit(e)
                        setCarSet(true)
                        setContratSet(true)
                        
                      }} class="btn btn-primary ">
                        Enregistrer son véhicule
                  </a>
                    </div>
                  </div></>}
                  {carSet && contratSet && <AjoutContrat
                  setOnpause={setOnpause}
                  setContratStart={setContratStart}
                  setContratDuration={setContratDuration}
                  setContratExpire={setContratExpire}
                  setSubscribeDate={setSubscribeDate}
                />}
                {/* {addCarTab} */}
                {userSet && carSet && <div className="">
                  <div class="m-2 float-end">
                    {/* <a href onClick={()=>onCarAdd()}  class="btn btn-warning mx-3 waves" style={{color:"black", cursor:'pointer'}} >Ajouter un autre véhicule</a> */}
                    <a href onClick={
                      (e) => handleSubmit(e)
                    } class="btn btn-primary ">
                      Enregistrer le contrat
                    </a>
                  </div>
                </div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(ModdalAjout);
