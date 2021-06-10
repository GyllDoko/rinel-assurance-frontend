import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import { connect } from "react-redux";
import AlarmProgamForm from "../components/alarmProgamForm";

export const AlarmProgrammer = (props) => {

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      props.history.push({
        pathname: "/login",
      });
    }
  }, [props.history]);
 

//   const history = props.history;
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
            <AlarmProgamForm/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
const mapStateToProps = () => {
//   return {
//     user: state.user,
//     accounts: state.user.accounts,
//     user_accounts: state.user.user_accounts

//   };
};

export default connect(mapStateToProps)(AlarmProgrammer);
