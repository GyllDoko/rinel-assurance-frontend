import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import DisplaysUserTab from "../components/displaysUserTab";
import Sidebar from "../components/sidebar";
import axios from "axios";

import { connect } from "react-redux";

export const Home = (props) => {
  const [accounttable, setAccounttable] = useState([]);
  const accountsTab = props.accounts;
  const addAccountToHome = () => {
    let data = [];
    console.log(data);
    for (let item of accountsTab) {
      if (item.accounts.length !== 0) {
        data.push(...item.accounts);
      }
    }
    console.log(data);
    accounttable.push(...data);
  };

  const [tabData, setTabData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);
  useEffect(() => {
    addAccountToHome();
    setTabData(accounttable);
  }, [accounttable]);

  const history = props.history;
  const [menuClicked, setMenuClicked] = useState(true);
  const onMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };
 

  return (
    <div>
      <Header history={props.history} onMenuClicked={onMenuClicked} />
      {menuClicked && <Sidebar history={props.history} />}
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <Banner />
                
              <DisplaysUserTab history={history} tabData={tabData} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    accounts: state.user.accounts,
  };
};

export default connect(mapStateToProps)(Home);
