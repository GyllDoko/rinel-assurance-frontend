import React, {  useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

export function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);

  const _handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("assureur/login/", data)
      .then((res) => {
        if (res.data.status) {
          console.log(res.data);
          const action = {
            type: "GET_USERS",
            value: res.data,
          };
          props.dispatch(action);
         const payload ={
             type : "GET_SOLDE",
             value : res.data.user.assureur.solde_sms
         }
         props.dispatch(payload)
          let locals = JSON.stringify(res.data.user.user);
          sessionStorage.setItem("user", locals);
          props.history.push({
            pathname: "/home",
          });
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
      });
  };
  // useEffect(() => {
  //   if (sessionStorage.getItem("user") !== null) {
  //     props.history.push({
  //       pathname: "/home",
  //     });
  //   }
  // }, [props.history]);

  return (
    <div>
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div class="bg-primary bg-soft">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h4 class="text-primary">Bienvenue !</h4>
                        <p>Connectez-vous pour continuer...</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="auth-logo">
                    <a href class="auth-logo-dark">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo.svg"
                            alt=""
                            class="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <form
                      onSubmit={(e) => _handleSubmit(e)}
                      class="form-horizontal"
                    >
                      <div class="mb-3 row">
                        <label
                          for="example-email-input"
                          class="col-md-3 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-md-9">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control"
                            type="email"
                            placeholder="Entrer votre email"
                            id="example-email-input"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label
                          for="example-password-input"
                          class="col-md-3 col-form-label"
                        >
                          Mot de passe
                        </label>
                        <div class="col-md-9">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            class="form-control"
                            type="password"
                            placeholder="Entrer le mot de passe"
                            id="example-password-input"
                          />
                        </div>
                      </div>
                      {loginError ? (
                        <div
                          class="alert alert-danger alert-dismissible fade show"
                          role="alert"
                        >
                          <i class="mdi mdi-block-helper me-2"></i>
                          Veuillez entrer des informations valides !
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div class="mt-3 d-grid">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Connexion
                        </button>
                      </div>
                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Login);
