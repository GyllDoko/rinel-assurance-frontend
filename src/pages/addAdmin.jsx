import React, {useEffect, useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import DisplaysUserTab from '../components/displaysUserTab'
import Register from './register'
import axios from 'axios'


export default function AddAdmin(props) {
     const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [error, setError] = useState(false)
    const [errortexte, setErrortexte] = useState("")
    const [email, setEmail] = useState("")

     const _handleSubmit = (event) => {
        event.preventDefault()
        if (password === confirmpassword) {
            const data = {
                name: name,
                surname: surname,
                username: email,
                email: email,
                password: password
            }
            axios.post('users/register/', data).then(res => 
                {console.log(res)
                if (res.data.status) {
                     props.history.push({
                    pathname : '/login',
                })
                }else {
                    setError(true)
                    setErrortexte(res.data)
                    setTimeout(() => {
                        setError(false)
                    }, 5000);
                }
                }
                )
                
        } else {
            setPasswordError(true)
            setTimeout(() => {
                setPasswordError(false)
            }, 5000);
            
        }
    }

    // useEffect(() => {
    //     if(localStorage.getItem('user')===null){
    //         props.history.push({
    //             pathname: '/login'
    //         })
    //     }
        
    // }, [props.history])
    // useEffect(() => {
    //     let data= props.location.state.data 
    //     console.log(data)
    //     setVisitedData(data)
    // }, [props.location.state.data ])
   
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
                          <div class="card-body pt-5">
                                <div>
                                    <a href>
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.svg" alt="" class="rounded-circle" height="34" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2">
                                    <form class="needs-validation" onSubmit={(e) => _handleSubmit(e)}>
                                        <div class="mb-3 row">
                                            <label for="example-text-input" class="col-md-3 col-form-label">Nom</label>
                                            <div class="col-md-9">
                                                <input onChange={e => setName(e.target.value)} class="form-control" type="text" placeholder="Enter votre nom"
                                                    id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="example-text-input" class="col-md-3 col-form-label">Prénom</label>
                                            <div class="col-md-9">
                                                <input onChange={e => setSurname(e.target.value)} class="form-control" type="text" placeholder="Enter votre prénom"
                                                    id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="example-email-input" class="col-md-3 col-form-label">Email</label>
                                            <div class="col-md-9">
                                                <input onChange={e => setEmail(e.target.value)} class="form-control" type="email" placeholder="Entrer votre email"
                                                    id="example-email-input" />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="example-password-input" class="col-md-3 col-form-label">Mot de passe</label>
                                            <div class="col-md-9">
                                                <input onChange={e => setPassword(e.target.value)} class="form-control" type="password" placeholder="Entrer le mot de passe"
                                                    id="example-password-input" />
                                            </div>
                                        </div> <div class="mb-3 row">
                                            <label for="example-password-input" class="col-md-3 col-form-label">Confirmer </label>
                                            <div class="col-md-9">
                                                <input onChange={e => setConfirmpassword(e.target.value)} class="form-control" type="password" placeholder="Entrer à nouveau"
                                                    id="example-password-input" />
                                            </div>
                                        </div>
                                        {passwordError ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <i class="mdi mdi-block-helper me-2"></i>
                                                veuillez entrer le même mot de passe ! 
                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div> : <></>}
                                        {error ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <i class="mdi mdi-block-helper me-2"></i>
                                                {errortexte}
                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div> : <></>}
                                        <div class="mt-4 d-grid">
                                            <button class="btn btn-primary waves-effect waves-light" type="submit">Enregistrer</button>
                                        </div>



                                    </form>
                                </div>
</div>
                        </div>

                    </div>
                </div>
            </div>

           
            <Footer />
        </div>
    )
}
