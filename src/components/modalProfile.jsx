import React from 'react'

export default function ModdalProfile(props) {
    const onVisitedActive = (item) => {
        if (item) {
            return (<span class="badge bg-success ms-1 align-bottom">active</span>)
        } else {
            return (<span class="badge bg-danger ms-1 align-bottom">expiré</span>)
        }

    }
    const onContratPaused = (item)=>{
        if(item){
            return (<span class="badge bg-danger ms-1 align-bottom">oui</span>)
        }else {
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
    return (
        <div>

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="transaction-detailModalLabel">Profile</h5>
                    <a href="edit" onClick={()=> onEditClick()}><div className="float-end" style={{ color: 'red' }}>
                        <i class="mdi mdi-24px mdi-account-edit-outline"> Editer</i>
                    </div></a>
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
                                            <h4>Véhicule assuré</h4>
                                            <div class="col-sm-6">
                                                <div>
                                                    <p class="text-muted mb-2">{item.name}</p>
                                                    <h5>{item.matriculation}</h5>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="text-sm-end mt-4 mt-sm-0">
                                                    <p class="text-muted mb-2">{item.date_of_visit}</p>
                                                    <h5>{onVisitedActive(item.visited)}</h5>

                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                         <div class="row">
                                        <h4>Contrat</h4>
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
                                                 <h5>{onContratPaused(item.contrat.onPaused)}</h5>

                                             </div>
                                         </div>

                                     </div>
                                     {/* <hr />
                                         <div class="row">
                                        <h5>Information sur l'assurance</h5>
                                         <div class="col-sm-6">
                                             <div>
                                                 <p class="text-muted mb-2">Maison d'assurance</p>
                                                 <p>Agence assureur</p>
                                                 <p>Adresse</p>
                                                 <p>Gérant du compte</p>
                                             </div>
                                         </div> */}
                                         {/* <div class="col-sm-6">
                                             <div class="text-sm-end mt-4 mt-sm-0">
                                                 <h6 class="text mb-2">{item.assureurs.agency_mother_name}</h6>
                                                 <h6>{item.assureurs.agency}</h6>
                                                 <h6>{item.assureurs.agency_address}</h6>
                                                 <h6>{item.assureurs.manager}   <br /> Téléphone : <span>{item.assureurs.phone_number}</span></h6>

                                             </div>
                                         </div> */}

                                     {/* </div> */}
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
