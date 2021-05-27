import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import AjoutAgence from "../components/ajoutAgence";
import axios from "axios";
// import axios from 'axios'

export default function CreateAgence(props) {
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);

  const [menuClicked, setMenuClicked] = useState(true);
  const [filename, setFilename] = useState("");
  const [agency, setAgency] = useState("");
  const [agency_mother_name, setAgency_mother_name] = useState("");
  const [ifu, setIfu] = useState("");
  const [rccm, setRccm] = useState("");
  const [manager, setManager] = useState("");
  const [agency_address, setAgency_address] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [sender_id, setSender_id] = useState("");
  const onMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };
  const onAgenceSubmit = (event) => {
    event.preventDefault();
    const data = {
      agency: agency,
      agency_mother_name: agency_mother_name,
      ifu: ifu,
      rccm: rccm,
      manager: manager,
      agency_address: agency_address,
      phone_number: phone_number,
      sender_id: sender_id,
      logo: filename,
    };

    axios.post("assureur/agence/", data).then((res) => {
      if (res.data) {
          alert(res.data)
      }
    });
  };

  return (
    <div>
      <Header history={props.history} onMenuClicked={onMenuClicked} />
      {menuClicked && <Sidebar history={props.history} />}
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <AjoutAgence
                setFilename={setFilename}
                onAgenceSubmit={onAgenceSubmit}
                setAgency={setAgency}
                setAgency_mother_name={setAgency_mother_name}
                setAgency_address={setAgency_address}
                setManager={setManager}
                setSender_id={setSender_id}
                setPhone_number={setPhone_number}
                setIfu={setIfu}
                setRccm={setRccm}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
