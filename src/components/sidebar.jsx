import React from 'react'
import axios from 'axios'

export default function Sidebar(props) {
  
  const onLogout = ()=>{
    localStorage.clear()
    props.history.push({
      pathname : '/login'
    })
  }
    const onHandleVisited = (event)=>{
    event.preventDefault()
    axios.get('users/visited').then(res =>{

      console.log(res.data)
      props.history.push({
        pathname : '/search',
        state : {data :res.data}
      })
    })
   
  }
    return (
        <div class="vertical-menu">
          <div data-simplebar class="h-100">
            <div id="sidebar-menu" >
              <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" key="t-menu">Menu</li>
                <li>
                  <a href="home" class="waves-effect">
                    <i class="mdi mdi-home"></i>
                    <span >Accueil</span>
                  </a>
                </li>
                <li>
                  <a href="add_admin" class="waves-effect">
                    <i class="mdi mdi-account-cog-outline"></i>
                    <span >Ajouter un collaborateur</span>
                  </a>
                </li>
                <li>
                  <a href="add" class="waves-effect">
                    <i class="bx bxs-user-check"></i>
                    <span >Ajouter un client</span>
                  </a>
                </li>
                <li>
                  <a href onClick={(e)=>{
                     onHandleVisited(e)
                  }} class="waves-effect">
                    <i class="bx bxs-watch"></i>
                    <span >Voir les contrats expirés</span>
                  </a>
                </li>
                {/* <li>
                  <a href class="waves-effect">
                    <i class="bx bxs-lock-alt"></i>
                    <span >Se déconnecter</span>
                  </a>
                </li> */}
                </ul>
              
                <a href onClick={()=>onLogout()} class="waves-effect " style={{position: 'absolute', bottom: 10, right:20, color: 'red'}}>
                <i class="bx bxs-lock-alt"></i>
                  <span> Se déconnecter</span>
                </a>
                
            </div>
           
          </div>
        </div>
       
        
    )
}
