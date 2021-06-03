import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import axios from 'axios';

import AjoutVoiture from "../components/ajoutVoiture";
import AjoutContrat from "../components/ajoutContrat";

export function AddCar(props){
    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            props.history.push({
                pathname: "/login",
            });
        }
    }, [props.history]);


    const [menuClicked, setMenuClicked] = useState(true);
    const onMenuClicked = () => {
        setMenuClicked(!menuClicked);
    };
    const user = props.location.state.user
    //car
    const [carname, setCarname] = useState("");
    const [matriculation, setMatriculation] = useState("");
    const [couleur, setCouleur] = useState("");
    const [filename, setFilename] = useState("");
    // contrat
    const [contratStart, setContratStart] = useState(null);
    const [contratExpire, setContratExpire] = useState(null);
    const [contratDuration, setContratDuration] = useState("");
    const [onpause, setOnpause] = useState(false);
    const [subscribeDate, setSubscribeDate] = useState(null)
    // screen controls
    const [carSet, setCarSet] = useState(false)
    const [contratSet, setContratSet] = useState(false)

    //reponse ids from partials save
    const [carResponseId, setCarResponseId] = useState("")
    const onCarSubmit = (event) => {
        event.preventDefault()
        let cardata =
        {
            account_id: user.id,
            name: carname,
            color: couleur,
            matriculation: matriculation,
            grey_card: filename,
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

        let contratData = {
            car_id: carResponseId,
            subscribe: subscribeDate,
            start: contratStart,
            end: contratExpire,
            duration: contratDuration,
            onPause: onpause,
        };

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
            <Header history={props.history} onMenuClicked={onMenuClicked} />
            {menuClicked && <Sidebar history={props.history} />}
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <form>
                                {!carSet && <><AjoutVoiture
                                    setCarname={setCarname}
                                    setCouleur={setCouleur}
                                    setMatriculation={setMatriculation}
                                    setFilename={setFilename}
                                />
                                    <div className="">
                                        <div class="m-2 float-end">
                                            <a href onClick={(e) => {
                                                onCarSubmit(e)
                                                setCarSet(true)
                                                setContratSet(true)

                                            }} class="btn btn-primary ">
                                                Enregistrer le véhicule
                                            </a>
                                        </div>
                                    </div></>}
                                {carSet && contratSet && <AjoutContrat
                                    setSubscribeDate={setSubscribeDate}
                                    setOnpause={setOnpause}
                                    setContratStart={setContratStart}
                                    setContratDuration={setContratDuration}
                                    setContratExpire={setContratExpire}
                                />}
                                {carSet && <div className="">
                                    <div class="m-2 float-end">
                                        <a href onClick={
                                            (e) => handleSubmit(e)
                                        } class="btn btn-primary ">
                                            Mettre à jour le contrat
                                        </a>
                                    </div>
                                </div>}
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
    
}

const mapStateToProps = (state)=> {
    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps)(AddCar)
