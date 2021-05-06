import React from 'react'

export default function AjoutContrat(props) {
    return (
        <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <h3 class="card-title text-uppercase mb-3 ">Ajouter un Contrat</h3>
                        <hr />
                        
                            <div className="row  mb-3" style={{ textAlign: 'start' }}>
                                <h5>Information concernant le contrat</h5>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-date-input" class="col-md-2 col-form-label pt-0">Date de souscription</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setContratStart(e.target.value)
                                    } class="form-control" type="date"
                                        id="example-date-input" required />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Durée du contrat</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setContratDuration(e.target.value)} class="form-control" type="number" placeholder="veuillez entrer la durée en décimal"
                                        id="example-text-input" required />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-date-input" class="col-md-2 col-form-label pt-0">Date d'expiration </label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setContratExpire(e.target.value)
                                    } class="form-control" type="date"
                                        id="example-date-input" required />
                                </div>
                            </div>
                           
                    </div>


                </div>
            </div>
        </div>
    </div>

    )
}
