import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'moment'

export default function UpdateVoiture(props) {
    const [dateOfNext, setDatOfNext] =useState('')
    const [prevDate, setPrevDate] = useState(null)
    const [grey_card, setGrey_card] = useState(null)
    const [responseFile, setResponseFile] = useState("")

     const onHandlefile =(e)=>{
        let formData = new FormData()
        formData.append('uploadedFile', grey_card)
        axios.post('users/saveFile',formData, {headers:{'Content-type': "multipart/form-data"}}).then(res => setResponseFile(res.data))
    }
    useEffect(() => {
        let formData = new FormData()
        formData.append('uploadedFile', grey_card)
        axios.post('users/saveFile',formData, {headers:{'Content-type': "multipart/form-data"}}).then(res => setResponseFile(res.data))
       
    }, [grey_card], props.setFilename(responseFile))
    useEffect(() => {
        // if(ref.current){
        //     return
        // }else{
        moment.locale('fr') 
        setDatOfNext(moment(prevDate).add(1, 'y').format("YYYY-MM-DD"))
        
          
        // }
       
      
    },[prevDate,], props.setDate_of_next_visit(dateOfNext))

   
    const onDateChange = (e)=>{
        setPrevDate(e.target.value)
    }
    return (
        <>
        <hr mt-2 />
            <div className="row  mb-3" style={{ textAlign: 'start' }}>

                <h5>Information concernant le véhicule</h5>
            </div>
            <div class="mb-3 row">
                <label for="example-tel-input" class="col-md-2 col-form-label">Marque</label>
                <div class="col-md-10">
                    <input onChange={(e) => props.setCarname(e.target.value)} class="form-control" type="text" placeholder={props.car.name ? props.car.name : ""}
                        id="example-tel-input" />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="example-tel-input" class="col-md-2 col-form-label">Couleur</label>
                <div class="col-md-10">
                    <input onChange={(e) => props.setCouleur(e.target.value)} class="form-control" type="text" 
                        id="example-tel-input" placeholder={props.car.color} />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="example-tel-input" class="col-md-2 col-form-label">Immatriculation</label>
                <div class="col-md-10">
                    <input onChange={(e) => props.setMatriculation(e.target.value)} class="form-control" type="text" placeholder={props.car.matriculation}
                        id="example-tel-input" />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="formFile" class="col-md-2 col-form-label">Carte grise</label>
                <div className="col-md-10">
                    <input onChange={(e) => {setGrey_card(e.target.files[0])
                onHandlefile(e)}} class="form-control" type="file" id="formFile" />
                    </div>
                
            </div>
            <div class="mb-3 row">
                <label for="example-date-input" class="col-md-2 col-form-label pt-0">Dernière visite</label>
                <div class="col-md-10">
                    <input  onChange={(e) =>{ props.setDate_of_visit(e.target.value)
                     onDateChange(e)}} class="form-control" type="date" 
                        id="example-date-input" />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="example-date-input" class="col-md-2 col-form-label  pt-0">Prochaine visite</label>
                <div class="col-md-10">
                    <input onChange={(e) => props.setDate_of_next_visit(e.target.value)} class="form-control" type="date"  value={dateOfNext}
                        id="example-date-input" />
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-2 col-form-label pt-0">Visite effectué</label>
                <div class="col-md-10">
                    <select onChange={(e) => {
                        props.onSelectHandle(e)
                    }} class="form-select" >
                        <option value="1">Effectué</option>
                        <option value="0">Non effectué</option>
                    </select>
                </div>
            </div>
            {/* <div className="mb-3 row">
                    <button class="btn btn-secondary " onClick={(e)=> props.onCarSubmit(e)}>Enregister le véhicule</button>
            </div> */}

        </>
    )
}
