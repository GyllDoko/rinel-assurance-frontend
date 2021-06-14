import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ModalInput from './modalInput'

export function Sidebar(props) {
  const [isTaff, setIsTaff] = useState(false)
  const [isDG, setIsDG] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState("")


  useEffect(() => {
    if (props.user.user.is_staff) {
      setIsTaff(true)
    }
    if (props.isDG) {
      setIsDG(true)
    }

  }, [props.user.user.is_staff, props.isDG])
  const onLogout = () => {
    localStorage.clear()
    props.history.push({
      pathname: '/login'
    })
  }
   
  const onHandleVisited = (event)=>{
    event.preventDefault()
  
      props.history.push({
        pathname : '/search'
      })
    }
  
    const onAlarmClicked = (e) => {
      e.preventDefault();
  
      let message = modalText
      if (message) {
        if (
          window.confirm("Voulez-vous envoyer ce message a tous les abonnés ?")
        ) {
          setModalShow(false)
          var data = {
            message: message,
            sender_id: props.agence.sender_id,
            agence: props.agence,
          };
          axios.post("assureur/communique/", data).then((res) => {
            
            
            var action = {
              type: "UPDATE_SOLDE",
              value: res.data.minus,
            };
            props.dispatch(action);
            return (alert(res.data.message))
          });
        }
      }
    };
  
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
            {isDG && <li>
              <a href="add_admin" class="waves-effect">
                <i class="mdi mdi-account-cog-outline"></i>
                <span >Ajouter un collaborateur</span>
              </a>
            </li>}
            {!isTaff && <li>
              <a href="add" class="waves-effect">
                <i class="bx bxs-user-plus"></i>
                <span >Ajouter un client</span>
              </a>
            </li>}
            
            
            {!isTaff && <li>
              <a href class="waves-effect" aria-controls="menu-item"
              //  aria-expanded={expiredContratOpen}
                onClick={(e) => {
                  onHandleVisited(e)
                  // setExpiredContratOpen(!expiredContratOpen)
                  }}>
                <i class="bx bxs-receipt"></i>
                <span >Voir les contrats expirant</span>
              </a>
              {/* <Collapse in={expiredContratOpen}>
                <ul id="menu-item">
                    <li><Link onClick={(e)=> {
                      setExpiredDay(30)
                      onHandleVisited(e)
                    }} href>1 mois</Link></li>
                    <li><Link onClick={(e)=> {
                      setExpiredDay(20)
                      onHandleVisited(e)
                    }} href>20 jours</Link></li>
                    <li><Link onClick={(e)=> {
                      setExpiredDay(10)
                      onHandleVisited(e)
                    }} href>10 jours</Link></li>
                    
                </ul>
              </Collapse> */}
            </li>}
            {/* <li>
                  <a href onClick={(e)=>{
                     onHandleVisited(e)
                  }} class="waves-effect">
                    <i class="bx bxs-watch"></i>
                    <span >Voir les contrats expirés</span>
                  </a>
                </li> */}


          {!isTaff && <li>
            <a href="/payment" class="waves-effect">
              <i class="bx bxs-cart"></i>
              <span >Créditer le compte</span>
            </a>
          </li>}
          {!isTaff && <li>
            <a href="/program" class="waves-effect">
              <i class="bx bxs-book-bookmark"></i>
              <span >Programmer un comuniniquer</span>
            </a>
          </li>}
          {!isTaff && <li>

            <a
              href
              onClick={(e) => setModalShow(true)}
              type="button"
              class="waves-effect text-center"
            >
              <i class="mdi mdi-alarm m-0 p-0"></i> <span className="text-center">Passer un communiqué
                      aux clients</span>
            </a>

          </li>}
          </ul>
          <ModalInput setModalShow={setModalShow} show={modalShow} onHide={onAlarmClicked} setModalText={setModalText} />


        <a href onClick={() => onLogout()} class="waves-effect " style={{ position: 'absolute', bottom: 10, right: 20, color: 'red' }}>
          <i class="bx bxs-lock-alt"></i>
          <span> Se déconnecter</span>
        </a>

      </div>

    </div>
    </div >


  )
}
const mapStateToProps = (state) => {
  return {
    agence: state.user.user.assureur,
    user: state.user.user,
    isDG: state.user.isDG
  }
}

export default connect(mapStateToProps)(Sidebar)