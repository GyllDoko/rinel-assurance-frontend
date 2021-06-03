import moment from 'moment'
import React from 'react'
import '../css/tablerow.css'

export default function TableRow(props) {
    const onViewClick =()=>{
        props.history.push({
            pathname: '/profil',
            state : {cars: props.user}
        })
    }
    const user= props.user
    return (
        <>
            <tr onClick={onViewClick} style={{cursor: 'pointer'}}  className="">
                

                <td><a href class="text-body fw-bold">{props.id}</a> </td>
                <td>{props.name}</td>
                <td>
                    {props.surname} </td>
                <td>
                    {props.telephone}</td>
                <td className="text-center">
                    <span class=" ">{user.profession}</span>
                </td>
                
                
                <td className="text-center"> 
                    <span class=" ">{moment(user.timestamp).calendar() }</span>
                </td>
               
            </tr>
           
        </>
    )
}
