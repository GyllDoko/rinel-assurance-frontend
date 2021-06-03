import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import axios from 'axios';
import UpdateContrat from "../components/updateContrat";

export function EditContrat(props){
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
    const car = props.location.state.car
    
    
    // contrat
    const [contratStart, setContratStart] = useState(null);
    const [contratExpire, setContratExpire] = useState(null);
    const [contratDuration, setContratDuration] = useState("");
    const [onpause, setOnpause] = useState(false);
    const [subscribeDate, setSubscribeDate] = useState(null)

   

    const handleSubmit = (event) => {
        event.preventDefault();

        let contratData = {
            id: car.contrat.id,
            subscribe: subscribeDate,
            start: contratStart,
            end: contratExpire,
            duration: contratDuration,
            onPause: onpause,
        };

        axios.put("assureur/save_contrat/", contratData).then((res) => {
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
                               <UpdateContrat
                                    contrat={car.contrat}
                                    setSubscribeDate={setSubscribeDate}
                                    setOnpause={setOnpause}
                                    setContratStart={setContratStart}
                                    setContratDuration={setContratDuration}
                                    setContratExpire={setContratExpire}
                                />
                                <div className="">
                                    <div class="m-2 float-end">
                                        <a href onClick={
                                            (e) => handleSubmit(e)
                                        } class="btn btn-primary ">
                                            Mettre à jour le contrat
                                        </a>
                                    </div>
                                </div>
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
export default connect(mapStateToProps)(EditContrat)
