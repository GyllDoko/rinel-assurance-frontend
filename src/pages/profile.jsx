import React , {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

export default function Profile(props) {
    useEffect(() => {
        if(sessionStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
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
                    </div>

                </div>
            </div>
        </div>

       
        <Footer />
    </div>
    )
}
