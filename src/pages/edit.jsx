import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import UpdateAjout from '../components/updateAjout'


export default function Edit(props) {
    useEffect(() => {
        if(sessionStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
    const history = props.history
    const userEdit = props.location.state.user 
    console.log(userEdit)
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
                           <UpdateAjout history={history} userEdit={userEdit}  />
                        </div>

                    </div>
                </div>
            </div>

           
            <Footer />
        </div>
    )
}
