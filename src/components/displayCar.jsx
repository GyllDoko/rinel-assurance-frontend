import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';

export  function DisplayCar(props) {
    const onEditCar = (item) => {
        props.history.push({
            pathname: '/edit_car',
            state: { car: props.item }
        })
        console.log(props.item);
    }
    const onDeleteCar =()=>{
        if(window.confirm("Voulez vous vraiment supprimer ce véhicule ?")){
             axios.delete(`assureur/delete_car/${props.item.id}/`).then(
            (res) => {
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
            }
        )
        }
       
    }
    return (
        <>
            <div className='row  m-0 p-0'>
            <div className='col-sm-6'><h4>Véhicule assuré N° {props.index+1}</h4></div>
                
                
                <div className='col-sm-6 float-end'> <span className="float-end" title="suprimer le véhicule pour ce client"><a className='btn btn-outline-default d-inline' href onClick={() => onDeleteCar()}>
                    <i className="bx bx-trash" style={{fontSize: 20, color: 'red'}}></i></a></span>
                    <span className="float-end mx-2"><a className='btn btn-outline-danger d-inline' href onClick={() => onEditCar()}>
                    Modifier le véhicule</a></span></div>

            </div>
            <div class="col-sm-6">
                <div>
                    <p class="text-muted mb-2">{props.item.name}</p>
                    <h5>{props.item.matriculation}</h5>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="text-sm-end mt-4 mt-sm-0">
                    <p class="text-muted mb-2">Couleur</p>
                    <h5>{props.item.color}</h5>

                </div>
            </div>

          
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        user: state.user.user
    }
}


export default connect(mapStateToProps)(DisplayCar)