import React, { useEffect, useState } from "react";
import moment from "moment";

export default function AjoutContrat(props) {
  const [prevDate, setPrevDate] = useState(null);
  const [addYear, setAddYear] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [ischeck, setIscheck] = useState(false);

  useEffect(
    () => {
      moment.locale("fr");
      let expire_date = moment(prevDate)
        .add(addYear, "days")
        .format("YYYY-MM-DD");
      setExpireDate(expire_date);
    },
    [addYear, prevDate],
    props.setContratExpire(expireDate),
    props.setOnpause(ischeck)
  );
  // useEffect(() => {

  // },[],props.setOnpause(ischeck))

  return (
    <div>
      <div class="row">
        <div class="col-12">
          <div className="row  mb-3" style={{ textAlign: "start" }}>
            <h5>Information concernant le contrat</h5>
          </div>
          <div class="mb-3 row">
            <label
              for="example-date-input"
              class="col-md-2 col-form-label pt-0"
            >
              Date de souscription
            </label>
            <div class="col-md-10">
              <input
                onChange={(e) => {
                  props.setSubscribeDate(e.target.value);
                }}
                class="form-control"
                type="date"
                id="example-date-input"
                required
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label
              for="example-date-input"
              class="col-md-2 col-form-label pt-0"
            >
              Date de début
            </label>
            <div class="col-md-10">
              <input
                onChange={(e) => {
                  props.setContratStart(e.target.value);
                  setPrevDate(e.target.value);
                }}
                class="form-control"
                type="date"
                id="example-date-input"
                required
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label for="example-text-input" class="col-md-2 col-form-label">
              Durée du contrat
            </label>
            <div class="col-md-10">
              <input
                onChange={(e) => {
                  props.setContratDuration(e.target.value);
                  setAddYear(e.target.value - 1);
                }}
                class="form-control"
                type="number"
                placeholder="veuillez entrer la durée en jours"
                id="example-text-input"
                required
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label
              for="example-date-input"
              class="col-md-2 col-form-label pt-0"
            >
              Date d'expiration{" "}
            </label>
            <div class="col-md-10">
              <input
                value={expireDate}
                class="form-control"
                type="date"
                id="example-date-input"
                required
              />
            </div>
          </div>

          <div class="col-xl-3 col-sm-6">
            <div class="mt-4">
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck1"
                  onChange={(e) => setIscheck(e.target.checked)}
                />
                <label class="form-check-label" for="formCheck1">
                  Signaler si le contrat est en pause
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
