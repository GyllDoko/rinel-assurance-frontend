import React, {useState,useEffect} from 'react'
import Banner from '../components/banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DisplaysUserTab from '../components/displaysUserTab'
import Sidebar from '../components/sidebar'
import axios from 'axios'

export default function Home(props) {
    
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        if(localStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
    useEffect(() => {
        axios.get('users/').then(res => {setTabData(res.data)
       })
    }, [])
   
    const history = props.history
    const [menuClicked, setMenuClicked] = useState(true)
    const onMenuClicked = ()=>{
        setMenuClicked(!menuClicked)
    }
  
    return (
        <div>
            <Header history={props.history} onMenuClicked={onMenuClicked} />
            {menuClicked && <Sidebar  history={props.history}  />}
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
    )
}