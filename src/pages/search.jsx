import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import DisplaysUserTab from "../components/displaysUserTab";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [visitedData, setVisitedData] = useState([]);
  const [expiredDay, setExpiredDay] = useState(0)
  const [expiredContratOpen, setExpiredContratOpen] = useState(false)


  useEffect(() => {
    if (sessionStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);
  // useEffect(() => {
  //   let data = props.location.state.data;
  //   console.log(data);
  //   setVisitedData(data);
  // }, [props.location.state.data]);

  const [menuClicked, setMenuClicked] = useState(true);
  const onMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };
  const onHandleVisited = (event)=>{
    event.preventDefault()
    axios.get(`assureur/contrat_expired/${expiredDay}`).then(res =>{

      console.log(res.data)
      setVisitedData(res.data)
      setExpiredContratOpen(true)
     
    })}
 

  return (
    <div>
      <Header history={props.history} onMenuClicked={onMenuClicked} />
      {menuClicked && <Sidebar history={props.history} />}
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div className="row d-flex">
              <div className="col-sm-10">
              <input
                onChange={(e) => setExpiredDay(e.target.value)}
                class="form-control"
                type="number"
                placeholder="veuillez entrer la durée en jours"
                id="example-text-input"
                required
              />
              </div>
              <div className="col-sm-2"><Link onClick={(e)=>{onHandleVisited(e)}} className="btn btn-primary">Rechercher</Link></div>
              
            </div>
            <div class="row">
              {expiredContratOpen && <DisplaysUserTab history={props.history} tabData={visitedData} />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
