import React from 'react'

export default function Updateassureur(props) {
    return (
        <div>
        <div class="row">
            <div class="col-12">
                        <hr />
                        
                            <div className="row  mb-3" style={{ textAlign: 'start' }}>
                                <h5>Information concernant l'assureur</h5>
                            </div>
                            

                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Nom de l'agence</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setAsssuranceAgency(e.target.value)} class="form-control" type="text" placeholder={props.assurer.agency}
                                        id="example-text-input" required />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Nom de l'agence mère</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setAsssuranceAgencyMother(e.target.value)} class="form-control" type="text" placeholder={props.assurer.agency_mother_name}
                                        id="example-text-input" required />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Addresse de l'agence</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setAsssuranceAddress(e.target.value)} class="form-control" type="text" placeholder={props.assurer.agency_address}
                                        id="example-text-input" required />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Nom et prénom du gérant</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setAsssuranceManager(e.target.value)} class="form-control" type="text" placeholder={props.assurer.manager}
                                        id="example-text-input" required />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="example-text-input" class="col-md-2 col-form-label">Téléphone</label>
                                <div class="col-md-10">
                                    <input onChange={(e) => props.setAsssurancePhone(e.target.value)} class="form-control" type="number" placeholder={props.assurer.phone_number}
                                        id="example-text-input" required />
                                </div>
                            </div>
                           
                    </div>


                </div>
            </div>
    )
}
