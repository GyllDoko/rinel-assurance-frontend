import React from 'react'
import SearchComponent from './searchComponent'

export default function Header(props) {
    const store = localStorage.getItem('user')
    console.log(store)
    const onLogout = () => {
        localStorage.clear()
        props.history.push({
            pathname: '/login'
        })
    }
    return (
        <div>
            <header id="page-topbar">
                <div class="navbar-header">
                    <div class="d-flex">
                        <div class="navbar-brand-box">
                            <a href="home" class="logo logo-dark d-flex pt-1 " className="text-center">
                                <span class="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="25" />
                                </span>
                                {/* <span class="logo-lg"> */}
                                    {/* <img src="assets/images/logo-dark.png" alt="" height="17" /> */}
                                    {/* <h1 className="text-center">CNSR</h1> */}
                                    {/* </span> */}
                            </a>
                        </div>

                        <button onClick={()=>props.onMenuClicked()} type="button" class="btn btn-sm px-3 font-size-16 header-item waves " id="vertical-menu-btn">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>
                        {/* //search code */}
                       <SearchComponent history={props.history} />

                    </div>

                    <div class="d-flex">

                        <div class="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="mdi mdi-magnify"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">

                                <form class="p-3">
                                    <div class="form-group m-0">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search ..."
                                                aria-label="Recipient's username" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="submit"><i
                                                    class="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar" />
                                <span class="d-none d-xl-inline-block ms-1" key="t-henry">{store}</span>
                                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end">


                                {/* <a class="dropdown-item d-block" href="home"><i
                                    class="bx bx-wrench font-size-16 align-middle me-1"></i> <span
                                        key="t-settings">Paramètres</span></a> */}
                                <a onClick={() => onLogout()} class="dropdown-item text-danger" href ><i class="bx bx-log-out font-size-16 align-middle me-1 text-danger"></i>Se déconnecter</a>


                            </div>
                        </div>



                    </div>
                </div>
            </header>
        </div>
    )
}
