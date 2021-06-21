import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'

export const Addcontrat = (props) => {
    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            props.history.push({
                pathname: '/login'
            })
        }

    }, [props.history])
    const [menuClicked, setMenuClicked] = useState(true)
    const onMenuClicked = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <div>
            <Header history={props.history} onMenuClicked={onMenuClicked} />
            {menuClicked && <Sidebar history={props.history} />}

            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            {/* <ModdalAjout history={history} /> */}
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </div>)
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Addcontrat)
