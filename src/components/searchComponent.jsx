import React, {useState} from 'react'
import axios from 'axios'

export default function SearchComponent(props) {
    const [searchtext, setSearchtext] = useState("")

    const onHandleSubmit = (event)=>{
        event.preventDefault()
        console.log(searchtext + ' submited')
        axios.get(`users/results/${searchtext}/`).then(res =>{ 
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
