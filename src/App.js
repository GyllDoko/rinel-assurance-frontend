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
       <Route path={"/home"} component={Home}/>
       <Route path={"/login"} component={Login}/>
       <Route path={"/register"} component={Register}/>
       <Route path={"/search"} component={Search}/>
       <Route path={'/add'} component={AddUser}/>
       <Route path={'/edit'} component={Edit}/>
       <Route path={'/profil'} component={AfficherProfile}/>
       <Route path={'/result'} component={Results}/>
       <Route path={'/add_admin'} component={AddAdmin}/>
     </Switch>
   </Router>
  );
}

export default App;
