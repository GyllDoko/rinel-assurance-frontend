import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import DisplayTaskTab from './displayTaskTab'

export  function AlarmProgamForm(props) {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [date, setDate] = useState(null)
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        var task_data = {assureur_id: props.assureur.assureur.id }
        axios.post("assureur/assureur_task/", task_data).then(res => setTabData(res.data))
        }, [props.assureur.assureur.id])

    const onTaskSubmit =(e)=>{
        e.preventDefault()
        const data = {
            subject : subject,
            message: message,
            date: date,
            assureur:  props.assureur.assureur.id,
        }

        axios.post("assureur/program_task/", data).then(
            res =>{ alert(res.data)
                window.location.reload()
            }
        )
        
    }
    return (
        <div class="row" style={{minHeight:'80vh'}}>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Créer une programmation de communiqué</h4>
                    <form>
                        <div class="row mb-4">
                            <label for="projectname" class="col-form-label col-lg-2">Sujet</label>
                            <div class="col-lg-10">
                                <input onChange={(e)=>setSubject(e.target.value)} id="projectname" name="projectname" type="text" class="form-control" placeholder="Entrer le motif de la tache..."/>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label for="projectdesc" class="col-form-label col-lg-2">Message</label>
                            <div class="col-lg-10">
                                <textarea onChange={(e)=>setMessage(e.target.value)} class="form-control" id="projectdesc" rows="3" placeholder="Entrer le message a envoyer..."></textarea>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <label class="col-form-label col-lg-2"> Date</label>
                            <div class="col-lg-10">
                        <input onChange={(e)=>setDate(e.target.value)} type="date" class="form-control"  />
                                  
                            </div>
                        </div>

                        
                    </form>
                   
                    <div class="row justify-content-end">
                        <div class="col-lg-10 ">
                            <button onClick={(e)=> onTaskSubmit(e)} type="submit" class="btn btn-primary float-end">Ajouter la tâche</button>
                        </div>
                    </div>

                </div>
                <div>
                    <h5 class="ms-3 my-2">Listes des tâches enrégistrées</h5>
                    <div className="mx-2">
                        <DisplayTaskTab tabData={tabData} />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    )
}
const mapStateToProps = (state)=>{
    return {
        assureur:  state.user.user,
    }
}
export default connect(mapStateToProps)(AlarmProgamForm)