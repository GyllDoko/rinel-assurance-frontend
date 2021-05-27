import React, { useRef } from "react";
import TableRow from "../components/tableRow";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { connect } from "react-redux";

export function DisplaysUserTab(props) {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const onAlarmClicked = (e) => {
    e.preventDefault();

    let message = prompt("veuillez indiquer le message à envoyer :");
    if (message) {
      if (
        window.confirm("Voulez-vous envoyer ce message a tous les abonnés ?")
      ) {
        var data = { message: message, sender_id: props.agence.sender_id, agence : props.agence };
        axios.post("assureur/communique/",data).then((res) => alert(res.data));
      }
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-sm-4"></div>
                <div class="col-sm-8">
                  <div class="text-sm-end">
                    <a
                      href
                      onClick={(e) => onAlarmClicked(e)}
                      type="button"
                      class="btn btn-warning btn-rounded waves-effect waves-light mb-2 me-2"
                    >
                      <i class="mdi mdi-alarm me-1"></i> Passer un communiqué
                      aux clients
                    </a>
                    <a
                      href="add"
                      type="button"
                      class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                    >
                      <i class="mdi mdi-plus me-1"></i> Ajouter un client
                    </a>
                    <a
                      href
                      type="button"
                      class="btn btn-default  waves-effect waves-light mb-2 me-2"
                      onClick={handlePrint}
                    >
                      <i
                        className="bx bxs-printer"
                        style={{ fontSize: "x-large" }}
                      ></i>
                      {/* <i class="dripicons-print"></i> */}
                    </a>
                  </div>
                </div>
              </div>

              <div class="table-responsive" ref={componentRef}>
                <table class="table align-middle table-nowrap table-check">
                  <thead class="table-light">
                    <tr className="text-center">
                      <th class="align-middle">No</th>
                      <th class="align-middle">Nom</th>
                      <th class="align-middle">Prénom</th>
                      <th class="align-middle">Téléphone</th>
                      <th class="align-middle">...</th>
                      <th class="align-middle">Voir plus</th>
                      <th class="align-middle">Editer</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {props.tabData.map((item, index) => (
                      <TableRow
                        key={item.id}
                        user={item}
                        id={index + 1}
                        name={item.name}
                        surname={item.surname}
                        telephone={item.phone_number}
                        contacted={item.contacted}
                        history={props.history}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    agence: state.user.user.assureur,
  };
};

export default connect(mapStateToProps)(DisplaysUserTab);
