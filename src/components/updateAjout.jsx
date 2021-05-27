import React, { useState } from 'react'
import axios from 'axios'
import UpdateVoiture from './updateVoiture';
import OtherVoiture from './otherVoiture'
// import Updateassureur from './updateassureur'
import UpdateContrat from './updateContrat'

const UpdateAjout = (props) => {

    const userEdit = props.userEdit
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone_number, setPhone_number] = useState(0)
    const [profession, setProfession] = useState("")
    const [carname, setCarname] = useState("")
    const [matriculation, setMatriculation] = useState("")
    const [date_of_visit, setDate_of_visit] = useState(null)
    const [date_of_next_visit, setDate_of_next_visit] = useState(null)
    const [visited, setVisited] = useState(true)
    const [adresse, setAdresse] = useState("")
    const [couleur, setCouleur] = useState("")
    // const [asssuranceAgency, setAsssuranceAgency] = useState("")
    // const [asssuranceAgencyMother, setAsssuranceAgencyMother] = useState("")
    // const [asssuranceAddress, setAsssuranceAddress] = useState("")
    // const [asssuranceManager, setAsssuranceManager] = useState("")
    // const [asssurancePhone, setAsssurancePhone] = useState(0)
    const [contratStart, setContratStart] = useState(null)
    const [contratExpire, setContratExpire] = useState(null)
    const [contratDuration, setContratDuration] = useState("")
    const [onpause, setOnpause] = useState(false)
    const [naissance, setNaissance] = useState(null)
    // const [grey_card, setGrey_card] = useState("")
    const [filename, setFilename] = useState("")
    const [addCarTab, setAddCarTab] = useState([])


    const onSelectHandle = (e) => {
        let value = e.target.value
        if (value === '0') {
            setVisited(false)
            
        }
    }
    const [carData, setCarData] = useState([])
    const onCarSubmit = (event) => {
        event.preventDefault()
        // let formData = new FormData()
        // formData.append('uploadedFile', grey_card)
        // axios.post('assureur/saveFile',formData, {headers:{'Content-type': "multipart/form-data"}}).then(res => setFilename(res.data))
        // console.log(filename)
        let cardata = {
            name: carname,
            color: couleur,
            matriculation: matriculation,
            date_of_visit: date_of_visit,
            date_of_next_visit: date_of_next_visit,
            visited: visited,
            grey_card: filename
        }
        let updateCarData = [...carData + cardata]
        setCarData(updateCarData)
        console.log(cardata)
    }
    const handleSubmit = (event) => {

        event.preventDefault()
        // let assuranceData = {
        //     id: userEdit.cars.assureurs.id,
        //     agency: asssuranceAgency,
        //     ageny_mother: asssuranceAgencyMother,
        //     address: asssuranceAddress,
        //     manager: asssuranceManager,
        //     phone_number: asssurancePhone
        // }
        let contratData ={
            id: userEdit.cars.contrats.id,
            start: contratStart,
            end: contratExpire,
            duration: contratDuration,
            onPause: onpause
        }
        let cardata = {
            name: carname,
            color: couleur,
            matriculation: matriculation,
            date_of_visit: date_of_visit,
            date_of_next_visit: date_of_next_visit,
            visited: visited,
            grey_card:filename,
            // assurer: assuranceData,
            contrat: contratData
        }

        let updateCarData = [...carData, cardata]
        setCarData(updateCarData)
        console.log(updateCarData)
        const data = [{
            user: userEdit,
            name: name,
            surname: surname,
            phone_number: phone_number,
            profession: profession,
            adresse: adresse,
            birthday: naissance,
            cars: updateCarData
        }]
        axios.put('assureur/', data).then(res =>{
            if (res.data) {
                props.history.push({
                pathname: '/home'
            })
            }else {
                alert("veuillez correctement remplir les champs !")
            }

        })
    }
    const onCarAdd = ()=>{
        const newCarTabData = [ ...addCarTab , <OtherVoiture setCarname={setCarname} setCouleur={setCouleur} setMatriculation={setMatriculation}
            setDate_of_visit={setDate_of_visit}
            setDate_of_next_visit={setDate_of_next_visit}
            onSelectHandle={onSelectHandle}  setFilename={setFilename} onCarSubmit={onCarSubmit}  /> ]
        setAddCarTab(newCarTabData)
    }

    return (
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">

                            <h3 class="card-title text-uppercase mb-3 ">Mettre à jour l'usager</h3>
                            <hr />
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row  mb-3" style={{ textAlign: 'start' }}>
                                    <h5>Information concernant l'usager</h5>
                                </div>

                                <div class="mb-3 row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Nom</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setName(e.target.value)} class="form-control" type="text" placeholder={userEdit.name}
                                            id="example-text-input"  />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Prénom</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setSurname(e.target.value)} class="form-control" type="text" placeholder={userEdit.surname}
                                            id="example-text-input"  />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Profession</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setProfession(e.target.value)} class="form-control" type="text" placeholder={userEdit.profession}
                                            id="example-text-input"  />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="example-tel-input" class="col-md-2 col-form-label">Telephone</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setPhone_number(e.target.value)} class="form-control" type="number" placeholder={userEdit.phone_number}
                                            id="example-tel-input"  />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Adresse</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setAdresse(e.target.value)} class="form-control" type="text" placeholder={userEdit.address}
                                            id="example-text-input"  />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Date de Naissance</label>
                                    <div class="col-md-10">
                                        <input onChange={(e) => setNaissance(e.target.value)} class="form-control" type="date" placeholder="veuillez entrer l'adresse.."
                                            id="example-text-input" />
                                    </div>
                                </div>
                                {userEdit.cars.map((item) => (<><UpdateVoiture setCarname={setCarname} setCouleur={setCouleur} setMatriculation={setMatriculation}
                                    setDate_of_visit={setDate_of_visit}
                                    setDate_of_next_visit={setDate_of_next_visit}
                                    onSelectHandle={onSelectHandle} onCarSubmit={onCarSubmit} car={item}  setFilename={setFilename} />
                                    {/* <Updateassureur assurer={item.assureurs}  setAsssuranceAgency={setAsssuranceAgency} setAsssuranceAgencyMother={setAsssuranceAgencyMother} setAsssuranceAddress={setAsssuranceAddress} setAsssuranceManager={setAsssuranceManager} setAsssurancePhone={setAsssurancePhone} /> */}
                                    <UpdateContrat contrat={item.contrat} setOnpause={setOnpause} setContratStart={setContratStart} setContratDuration={setContratDuration} setContratExpire={setContratExpire} />
                                </>))}

                                {addCarTab}
                                <div className="">
                                    <div class="m-2 float-end" >
                                    <a href onClick={()=>onCarAdd()}  class="btn btn-warning mx-3 waves" style={{color:"black", cursor:'pointer'}} >Ajouter un autre véhicule</a>

                                        <button type="submit" class="btn btn-primary " >Mettre à jour l'usager</button>
                                    </div>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
};
export default UpdateAjout
