import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import DisplaysUserTab from "../components/displaysUserTab";
import Sidebar from "../components/sidebar";

import { connect } from "react-redux";

export const Home = (props) => {

  useEffect(() => {
    if (sessionStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);
 

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
                
              <DisplaysUserTab history={history} tabData={props.user_accounts} />
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
    user_accounts: state.user.user_accounts

  };
};

export default connect(mapStateToProps)(Home);
