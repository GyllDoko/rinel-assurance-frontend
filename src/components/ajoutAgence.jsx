import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AjoutAgence(props) {
  const [grey_card, setGrey_card] = useState(null);
  const [responseFile, setResponseFile] = useState("");
  // const onHandlefile = () => {
  //   let formData = new FormData();
  //   formData.append("uploadedFile", grey_card);
  //   axios
  //     .post("assureur/saveFile", formData, {
  //       headers: { "Content-type": "multipart/form-data" },
  //     })
  //     .then((res) => setResponseFile(res.data));
  // };
  useEffect(
    () => {
      let formData = new FormData();
      formData.append("uploadedFile", grey_card);
      axios
        .post("assureur/saveFile", formData, {
          headers: { "Content-type": "multipart/form-data" },
        })
        .then((res) => setResponseFile(res.data));
    },
    [grey_card],
    props.setFilename(responseFile)
  );

  return (
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Créer une agence</h4>
          {/* <p class="card-title-desc">Fill all information below</p> */}

          <form onSubmit={(e) => props.onAgenceSubmit(e)}>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <label for="productname">Nom de l'agence</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    class="form-control"
                    onChange={(e) => props.setAgency(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="manufacturername">Nom de l'agence mère</label>
                  <input
                    id="manufacturername"
                    name="manufacturername"
                    type="text"
                    onChange={(e) =>
                      props.setAgency_mother_name(e.target.value)
                    }
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="manufacturerbrand">IFU</label>
                  <input
                    id="manufacturerbrand"
                    name="manufacturerbrand"
                    type="number"
                    onChange={(e) => props.setIfu(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="price">RCCM</label>
                  <input
                    id="price"
                    onChange={(e) => props.setRccm(e.target.value)}
                    name="price"
                    type="number"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mb-3">
                  <label for="productname">Addrese de l'agence</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    onChange={(e) => props.setAgency_address(e.target.value)}
                    class="form-control"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="productname">Gérant de l'agence</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    onChange={(e) => props.setManager(e.target.value)}
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="productname">Téléphone</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    class="form-control"
                    onChange={(e) => props.setPhone_number(e.target.value)}

                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="productname">Sender ID</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    onChange={(e) => props.setSender_id(e.target.value)}

                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="formFile" class="col-md-2 col-form-label">
                logo
              </label>
              <div className="col-md-10">
                <input
                  onChange={(e) => {
                    setGrey_card(e.target.files[0]);
                    // onHandlefile(e);
                  }}
                  class="form-control"
                  type="file"
                  id="formFile"
                  required
                />
              </div>
            </div>

            <div class="d-flex flex-wrap gap-2 float-end">
              <button
                type="submit"
                class="btn btn-primary waves-effect waves-light"
              >
                Enregistrer
              </button>
              <button
                type="button"
                class="btn btn-danger waves-effect waves-light"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
