import './App.css';
import Home from './pages/home';
import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Search from './pages/search'
import AddUser from './pages/addUser';
import Login from './pages/login';
import Edit from './pages/edit';
import Register from './pages/register';
import AfficherProfile from './pages/afficherProfile';
import Results from './pages/results.jsx'
import AddAdmin from './pages/addAdmin.jsx'
import Checkout from './pages/checkout'
import CreateAgence from './pages/createAgence'
import  Editcar  from './pages/editcar';
import  AddCar  from './pages/addcar';
import EditContrat from './pages/editContrat';
import  AlarmProgrammer  from './pages/alarmProgrammer';



function App() {
  const [store, setStore] = useState(false)

  const redirectToHome = ()=>{
    if (store) {
      //  props.history.push({
      // pathname: '/home'
    // })
    }
   
  }
  useEffect(() => {
    let userStored = localStorage.getItem('user')
   if(userStored){
     setStore(true)
   }
   
  }, [],
    redirectToHome())
  return (
   <Router>
     <Switch>
       <Route exact path={"/"} component={Login} />
       <Route exact path={"/home"} component={Home}/>
       <Route exact path={"/login"} component={Login}/>
       <Route exact path={"/register"} component={Register}/>
       <Route exact path={"/search"} component={Search}/>
       <Route exact path={'/add'} component={AddUser}/>
       <Route exact path={'/edit'} component={Edit}/>
       <Route exact path={'/profil'} component={AfficherProfile}/>
       <Route exact path={'/result'} component={Results}/>
       <Route exact path={'/add_admin'} component={AddAdmin}/>
       <Route exact path={'/payment'} component={Checkout}/>
       <Route exact path={'/create_agence'} component={CreateAgence}/>
       <Route exact path={"/edit_car"} component={Editcar}/>
       <Route exact path={"/add_car"} component={AddCar}/>
       <Route exact path={"/edit_contrat"} component={EditContrat}/>
       <Route exact path={"/program"} component={AlarmProgrammer}/>
     </Switch>
   </Router>
  );
}

export default App;
