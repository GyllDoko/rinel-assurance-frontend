import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import DisplaysUserTab from '../components/displaysUserTab'

function Results(props) {
    useEffect(() => {
        if(localStorage.getItem('user')===null){
            props.history.push({
                pathname: '/login'
            })
        }
        
    }, [props.history])
    const data= props.location.state.searchData 
   
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
                            <DisplaysUserTab history={props.history} tabData={data} />
                        </div>

                    </div>
                </div>
            </div>

           
            <Footer />
        </div>
    )
}


export default Results
