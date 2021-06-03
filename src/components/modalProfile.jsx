import React from 'react'
import DisplayCar from './displayCar'

export default function ModdalProfile(props) {
    // const onVisitedActive = (item) => {
    //     if (item) {
    //         return (<span class="badge bg-success ms-1 align-bottom">active</span>)
    //     } else {
    //         return (<span class="badge bg-danger ms-1 align-bottom">expiré</span>)
    //     }

    // }
    const onContratPaused = (item) => {
        if (item) {
            return (<span class="badge bg-danger ms-1 align-bottom">oui</span>)
        } else {
            return (<span class="badge bg-success ms-1 align-bottom">non</span>)
        }
    }
    const onEditClick = () => {

        props.history.push({
            pathname: '/edit',
            state: { user: props.user }
        })
        console.log(props.user)
    }
    const onAddClick = ()=>{
        props.history.push({
            pathname: '/add_car',
            state: {user: props.user}
        })
    }

    const onEditContrat = (item) =>{
        props.history.push({
            pathname: '/edit_contrat',
            state: {car: item}
        })
    }
    console.log(props.user);
    return (
        <div>

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="transaction-detailModalLabel">Profile</h5>
                    <div className="float-end">
                        <a href="add_car" onClick={() => onAddClick()} className="btn btn-outline-warning d-inline mx-2">
                            Ajouter un véhicule</a>

                        <a href="edit" onClick={() => onEditClick()} style={{ color: 'red' }}>
                            <i class="mdi mdi-15px mdi-account-edit-outline"> </i>éditer</a>

                    </div>
                </div>
                <div class="modal-body">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body border-bottom text-center">
                                <div className='text-center'>
                                    <h5 class="text-center">{props.user.name} {props.user.surname}</h5>
                                    <p class="text-muted mb-1">{props.user.profession} | {props.user.phone_number}</p>
                                    <p class="text-muted mb-0">{props.user.address}</p>
                                </div>
                            </div>
                            <div class="card-body border-bottom">
                                <div>
                                    {props.user.cars.map((item, index) => (<>
                                        <div class="row" key={index}>
                                            <DisplayCar item={item} index={index} history={props.history} />

                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div className='row  m-0 p-0'>
                                                <div className='col-sm-6'><h4>Contrat</h4></div>
                                                <div className='col-sm-6 float-end'> <span className="float-end "><a className='btn btn-outline-danger d-inline' onClick={()=> onEditContrat(item)} href >Modifier le contrat</a></span></div>

                                            </div>
                                            <div class="col-sm-6">
                                                <div>
                                                    <p class="text-muted mb-2">Date de signature</p>
                                                    <p>Durée du contrat</p>
                                                    <p>En pause</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="text-sm-end mt-4 mt-sm-0">
                                                    <h5 class="text-muted mb-2">{item.contrat.created_at}</h5>
                                                    <h5>{item.contrat.duration}</h5>
                                                    <h5>{onContratPaused(item.contrat.on_pause)}</h5>

                                                </div>
                                            </div>

                                        </div>
                                        <hr className="mb-4"/>

                                    </>))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="table-responsive">
                    </div>
                </div>

            </div>
        </div>
    )
}
