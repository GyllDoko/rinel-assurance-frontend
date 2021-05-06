import React from 'react'

export default function ModdalProfile(props) {
    const onVisitedActive = (item) => {
        if (item) {
            return (<span class="badge bg-success ms-1 align-bottom">active</span>)
        } else {
            return (<span class="badge bg-danger ms-1 align-bottom">expiré</span>)
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
                                    <p class="text-muted mb-0"></p>
                                </div>
                            </div>
                            <div class="card-body border-bottom">
                                <div>
                                    {props.user.cars.map((item) => (
                                        <div class="row">
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

                                        </div>))}
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
