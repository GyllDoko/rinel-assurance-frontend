import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import DisplaysUserTab from '../components/displaysUserTab'
import axios from 'axios'


export default function Search(props) {
  const [visitedData, setVisitedData] = useState([])

    useEffect(() => {
        if(localStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
    useEffect(() => {
        let data= props.location.state.data 
        console.log(data)
        setVisitedData(data)
    }, [props.location.state.data ])
   
    const [menuClicked, setMenuClicked] = useState(true)
    const onMenuClicked = ()=>{
        setMenuClicked(!menuClicked)
    }
    const onAlarmClicked =(e) =>{
        e.preventDefault()
        let message = prompt('veuillez indiquer le message à envoyer :')
        if(window.confirm('Voulez-vous envoyer ce message a tous les abonnés ?')){
             axios.post('users/visited/', {"message": message}).then(
            res =>
            alert(res.data)
        )
        }
       
    }

    return (
        <div>
             <Header history={props.history} onMenuClicked={onMenuClicked} />
            {menuClicked && <Sidebar  history={props.history}  />}
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <div className="row">
                        <div class="text-sm-end">
                            <a href onClick={(e)=> onAlarmClicked(e) } type="button" class="btn btn-danger btn-rounded waves-effect waves-light mb-2 me-2"><i class="mdi mdi-alarm me-1"></i> Effectuer un rappel</a>
                        </div>
                        </div>
                        <div class="row">
                            <DisplaysUserTab history={props.history} tabData={visitedData} />
                        </div>

                    </div>
                </div>
            </div>

           
            <Footer />
        </div>
    )
}
