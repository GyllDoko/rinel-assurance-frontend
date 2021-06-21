import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function Checkout(props) {
  useEffect(() => {
    if (sessionStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);

  const GSM_NUMBER = {
    mtn: { num: 51773962, logo: "assets/images/gsmlogo/mtn.png" },
    moov: {
      num: 95959595,
      logo: "assets/images/gsmlogo/Logo-Moov-Africa_Logo-Moov-AFrica_Blanc.png",
    },
  };
  const BSIC = {
    num: "00100072014 23",
    intitule: "RINEL SARL",
    logo: "assets/images/gsmlogo/logo_bsic-21.jpg",
  };

  const [menuClicked, setMenuClicked] = useState(true);
  const [simClicked, setSimClicked] = useState(false);
  const [simNumber, setSimNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [bsicClicked, setBsicClicked] = useState(false);
  const [RecuFile, setRecuFile] = useState(null);
  const [transationID, setTransationID] = useState(0);
  const [filename, setFilename] = useState("");
  const [redirectToPayment, setRedirectToPayment] = useState(false);

  useEffect(() => {
    let formData = new FormData();
    formData.append("uploadedFile", RecuFile);
    axios
      .post("assureur/saveFile", formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => setFilename(res.data));
  }, [RecuFile]);
  const onHandleBsicCilcked = (e) => {
    e.preventDefault();
    setBsicClicked(true);
    setSimClicked(false);
  };

  const onHandleSimMTNCilcked = (e) => {
    e.preventDefault();
    setSimClicked(true);
    setBsicClicked(false);
    setSimNumber(GSM_NUMBER.mtn.num);
  };
  const onHandleSimMOOVCilcked = (e) => {
    e.preventDefault();
    setSimClicked(true);
    setBsicClicked(false);
    setSimNumber(GSM_NUMBER.moov.num);
  };
  const onMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };
  const onHandlePrice = (e) => {
    e.preventDefault();
    setCredit(e.target.value);
    let value = e.target.value;
    if (value < 25000) {
      setPrice(value * 15);
    } else if (value >= 25000 && value < 50000) {
      setPrice(value * 14);
    } else if (value >= 50000 && value < 250000) {
      setPrice(value * 13);
    } else if (value >= 250000 && value < 500000) {
      setPrice(value * 12);
    } else if (value >= 500000 && value < 1000000) {
      setPrice(value * 11);
    } else if (value >= 1000000 && value < 1500000) {
      setPrice(value * 10);
    } else if (value >= 1500000 && value < 2000000) {
      setPrice(value * 9);
    } else if (value > 2000000) {
      setPrice(value * 8);
    } else {
      alert("Veuillez entrer un nombre valide. Ex: 5000");
    }
  };
  const onSaveRecu = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("uploadedFile", RecuFile);
    axios
      .post("assureur/saveFile", formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => setFilename(res.data));
  };
  const onCheckout = (e) => {
    e.preventDefault();
    if (transationID !== 0) {
      var data = {
        credit: credit,
        agency: props.agence.agency,
        transactionId: transationID,
      };
      axios.post("assureur/credit_request_momo/", data).then((res) => {
        console.log(res);
        alert(res.data);
        props.history.push({
          pathname: "/home",
        });
      });
    } else if (RecuFile !== null) {
      var recudata = {
        credit: credit,
        agency: props.agence,
        filename: filename,
      };

      axios.post("assureur/credit_request_bancaire/", recudata).then((res) => {
        console.log(res);
        alert(res.data);
        props.history.push({
          pathname: "/home",
        });
      });
    }
  };
  return (
    <div>
      <Header history={props.history} onMenuClicked={onMenuClicked} />
      {menuClicked && <Sidebar history={props.history} />}
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="checkout-tabs">
                <div class="row">
                  <div class="col-xl-2 col-sm-3">
                    <div
                      class="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        class="nav-link active"
                        id="v-pills-shipping-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-shipping"
                        role="tab"
                        aria-controls="v-pills-shipping"
                        aria-selected="true"
                      >
                        <i class="bx bxs-badge d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="font-weight-bold mb-4"> Crédit demandé</p>
                      </a>
                      <a
                        class="nav-link"
                        id="v-pills-payment-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-payment"
                        role="tab"
                        aria-controls="v-pills-payment"
                        aria-selected="false"
                      >
                        <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="font-weight-bold mb-4">Paiement</p>
                      </a>
                      {/* <a
                        class="nav-link"
                        id="v-pills-confir-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-confir"
                        role="tab"
                        aria-controls="v-pills-confir"
                        aria-selected="false"
                      >
                        <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="font-weight-bold mb-4">Confirmation</p>
                      </a> */}
                    </div>
                  </div>
                  <div class="col-xl-10 col-sm-9">
                    <div class="card">
                      <div class="card-body">
                        <div class="tab-content" id="v-pills-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="v-pills-shipping"
                            role="tabpanel"
                            aria-labelledby="v-pills-shipping-tab"
                          >
                            <div>
                              <h4 class="card-title">
                                Formulaire de demande de crédit
                              </h4>
                              <p class="card-title-desc ">
                                Remplissez le champs ci-dessous
                              </p>
                              <form className="">
                                <div class="form-group row mb-4 py-5">
                                  <label
                                    for="billing-name"
                                    class="col-md-2 col-form-label"
                                  >
                                    Nombre de sms
                                  </label>
                                  <div class="col-md-10 d-flex">
                                    <input
                                      type="number"
                                      onChange={(e) => onHandlePrice(e)}
                                      class="form-control"
                                      id="billing-name"
                                      placeholder="Entrer le nombre de sms voulu"
                                    />
                                    <Link
                                      onClick={() => setRedirectToPayment(true)}
                                      className="btn btn-primary mx-2"
                                      to="#v-pills-payment"
                                    >
                                      valider
                                    </Link>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {redirectToPayment && (
                              <p className="text-center text-info">
                                Veuillez cliquez sur l'onglet paiement pour
                                continuer.
                              </p>
                            )}
                          </div>
                          <div
                            class="tab-pane fade"
                            id="v-pills-payment"
                            role="tabpanel"
                            aria-labelledby="v-pills-payment-tab"
                          >
                            <div>
                              <h4 class="card-title">
                                Information de paiement
                              </h4>
                              <p class="card-title-desc">
                                Choisissez le paiement de votre choix
                              </p>

                              <div>
                                <div class="form-check form-check-inline font-size-16">
                                  <button
                                    onClick={(e) => onHandleSimMTNCilcked(e)}
                                    className="btn btn-default"
                                    href
                                  >
                                    <img
                                      src={GSM_NUMBER.mtn.logo}
                                      alt="mtn"
                                      height="90px"
                                    />
                                  </button>
                                </div>
                                <div class="form-check form-check-inline font-size-16">
                                  <button
                                    onClick={(e) => onHandleSimMOOVCilcked(e)}
                                    className="btn btn-default bg-dark"
                                    href
                                  >
                                    <img
                                      src={GSM_NUMBER.moov.logo}
                                      alt="moov"
                                    />
                                  </button>
                                </div>
                                <div class="form-check form-check-inline font-size-16">
                                  <button
                                    onClick={(e) => onHandleBsicCilcked(e)}
                                    className="btn btn-default"
                                    href
                                  >
                                    <img src={BSIC.logo} alt="bsic" />
                                  </button>
                                </div>
                                {simClicked && (
                                  <>
                                    <div className="mt-2">
                                      <p>
                                        Veuillez envoyer{" "}
                                        <b className="mx-1">{price}</b>CFA au
                                        numéro{" "}
                                        <b className="mx-1"> {simNumber}</b>{" "}
                                        puis entrer l'id de la transaction
                                      </p>
                                    </div>
                                    <div className="row my-5 py-5">
                                      <div class="form-group mb-0 col-sm-6">
                                        <label for="expirydateInput">
                                          Entrer l'id de la transaction
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="expirydateInput"
                                          placeholder="ex: 000000000"
                                          onChange={(e) =>
                                            setTransationID(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="col-sm-6 mt-4">
                                        <button
                                          className="btn btn-primary"
                                          onClick={(e) => onCheckout(e)}
                                        >
                                          valider
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                )}
                                {bsicClicked && (
                                  <>
                                    <div className="mt-2">
                                      <p>
                                        Veuillez envoyer{" "}
                                        <b className="mx-1">{price}</b> CFA au
                                        <br />
                                        Numéro de compte BSIC :
                                        <b className="mx-1"> {BSIC.num}</b>{" "}
                                        <br />
                                        Intitulé de compte:
                                        <b className="mx-1">
                                          {BSIC.intitule}
                                        </b>{" "}
                                        <br />
                                        puis envoyer la capture du reçu de
                                        banque.
                                      </p>
                                    </div>
                                    <div className="row my-5 py-5">
                                      <div class="form-group mb-0 col-sm-6">
                                        <label for="expirydateInput">
                                          Reçu :
                                        </label>
                                        <input
                                          type="file"
                                          class="form-control"
                                          id="expirydateInput"
                                          onBlur={(e) => {
                                            onSaveRecu(e);
                                            setRecuFile(e.target.files[0]);
                                          }}
                                        />
                                      </div>
                                      <div className="col-sm-6 mt-4">
                                        <button
                                          className="btn btn-primary"
                                          onClick={(e) => onCheckout(e)}
                                        >
                                          valider
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>
                                <div class="p-4 border">
                                    <form>
                                        <div class="form-group mb-0">
                                            <label for="cardnumberInput">Card Number</label>
                                            <input type="text" class="form-control" id="cardnumberInput" placeholder="0000 0000 0000 0000"/>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group mt-4 mb-0">
                                                    <label for="cardnameInput">Name on card</label>
                                                    <input type="text" class="form-control" id="cardnameInput" placeholder="Name on Card"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="form-group mt-4 mb-0">
                                                    <label for="expirydateInput">Expiry date</label>
                                                    <input type="text" class="form-control" id="expirydateInput" placeholder="MM/YY"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="form-group mt-4 mb-0">
                                                    <label for="cvvcodeInput">CVV Code</label>
                                                    <input type="text" class="form-control" id="cvvcodeInput" placeholder="Enter CVV Code"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                          </div>
                          {/* <div
                            class="tab-pane fade"
                            id="v-pills-confir"
                            role="tabpanel"
                            aria-labelledby="v-pills-confir-tab"
                          >
                            <div class="card shadow-none border mb-0">
                              <div class="card-body">
                                <h4 class="card-title mb-4">Order Summary</h4>

                                <div class="table-responsive">
                                  <table class="table align-middle mb-0 table-nowrap">
                                    <thead class="table-light">
                                      <tr>
                                        <th scope="col">Réseau</th>
                                        <th scope="col">Crédit</th>
                                        <th scope="col">Prix</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">
                                          <img
                                            src="assets/images/product/img-1.png"
                                            alt="product-img"
                                            title="product-img"
                                            class="avatar-md"
                                          />
                                        </th>
                                        <td>
                                          <h5 class="font-size-14 text-truncate">
                                            
                                            {credit}
                                          </h5>
                                        </td>
                                        <td>{price}</td>
                                      </tr>
                                      {/* <tr>
                                                <th scope="row"><img src="assets/images/product/img-7.png" alt="product-img" title="product-img" class="avatar-md"/></th>
                                                <td>
                                                    <h5 class="font-size-14 text-truncate"><a href="ecommerce-product-detail.html" class="text-dark">Wireless Headphone </a></h5>
                                                    <p class="text-muted mb-0">$ 225 x 1</p>
                                                </td>
                                                <td>$ 225</td>
                                            </tr> */}

                          {/* <tr>
                                        <td colspan="2">
                                          <h6 class="m-0 text-end">Total:</h6>
                                        </td>
                                        <td>{price} CFA</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      {/* <div class="col-sm-6">
                    <a href="{% url 'ecommerce-cart" class="btn text-muted d-none d-sm-inline-block btn-link">
                        <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart </a>
                </div> */}
                      <div class="col-sm-12">
                        {/* <div class="text-end">
                          <a href="   " class="btn btn-success mb-3">
                            <i class="mdi mdi-truck-fast me-1"></i> Procéder au
                            paiement
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    agence: state.user.user.assureur,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
