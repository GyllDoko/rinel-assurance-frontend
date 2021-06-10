import React, {useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

export function SearchComponent(props) {
    const [searchtext, setSearchtext] = useState("")

    const onHandleSubmit = (event)=>{
        event.preventDefault()
        console.log(searchtext + ' submited')
        axios.get(`assureur/results/${searchtext}/${props.user.assureur.id}`).then(res =>{ 
            props.history.push({
            pathname : '/result',
            state : {searchData :res.data}
        })
        })
        
        
        }
    return (
        <>
            <form onSubmit={(e)=>(onHandleSubmit(e))} class="app-search d-none d-lg-block">
                <div class="position-relative" >
                    <input type="text" class="form-control" placeholder="Rechercher..." width="100%"  onChange={(e)=> setSearchtext(e.target.value)} />
                    <span class="bx bx-search-alt"></span>
                </div>
            </form>
        </>
    )
}
const mapStateToProps =(state)=> {
    return {
        user: state.user.user,
      };
}
export default connect(mapStateToProps)(SearchComponent)