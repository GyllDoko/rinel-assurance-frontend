import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import ModdalAjout from '../components/moddalAjout'

export default function AddUser(props) {
    useEffect(() => {
        if(sessionStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
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
                           <ModdalAjout history={history} />
                        </div>

                    </div>
                </div>
            </div>

           
            <Footer />
        </div>
    )
}