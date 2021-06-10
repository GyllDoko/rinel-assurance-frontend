import moment from 'moment'
import React from 'react'

export default function TaskRow(props) {
    return (
        <>
            <tr className="">
            

            <td><a href class="text-body fw-bold">{props.id}</a> </td>
            <td>{moment(props.edit_date).calendar() }</td>
            <td>{props.subject} </td>
            <td>{moment(props.date).calendar()}</td>
            
               
            </tr>
        </>
    )
}
