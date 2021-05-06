import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import ModdalProfile from '../components/modalProfile'

export default function AfficherProfile(props) {
    useEffect(() => {
        if(localStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
    const user = props.location.state.cars
    console.log(user)
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
                        <ModdalProfile user={user} history={props.history} />
                    </div>

                </div>
            </div>
        </div>

       
        <Footer />
    </div>
    )
}
