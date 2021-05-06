import React from 'react'
import TableRow from '../components/tableRow'

export default function DisplaysUserTab(props) {
    return (
        <div style={{ marginTop: "20px" }}>
            <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-sm-4">
                                               
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="text-sm-end">
                                                    <a href="add" type="button" class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i class="mdi mdi-plus me-1"></i> Ajouter un client</a>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="table-responsive">
                                            <table class="table align-middle table-nowrap table-check">
                                                <thead class="table-light">
                                                    <tr className="text-center">
                                                        
                                                        <th class="align-middle">No</th>
                                                        <th class="align-middle">Nom</th>
                                                        <th class="align-middle">Prénom</th>
                                                        <th class="align-middle">Téléphone</th>
                                                        <th class="align-middle">durée</th>
                                                        <th class="align-middle">Voir plus</th>
                                                        <th class="align-middle">Editer</th>
                                                    </tr>
                                                </thead>
                                              
                                    <tbody className="text-center">
                                        {props.tabData.map((item, index)=>( <TableRow key={item.id} user={item} id={index+1} name={item.name} surname={item.surname} telephone={item.phone_number} contacted={item.contacted} history={props.history}  />))}
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
