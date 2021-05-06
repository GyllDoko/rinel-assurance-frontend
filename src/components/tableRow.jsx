import React from 'react'

export default function TableRow(props) {
    const onViewClick =()=>{
        props.history.push({
            pathname: '/profil',
            state : {cars: props.user}
        })
    }
    const onEditClick =()=>{
       
        props.history.push({
            pathname: '/edit',
            state : {user: props.user}
        })
    }
   
    return (
        <>
            <tr>

                <td><a href class="text-body fw-bold">{props.id}</a> </td>
                <td>{props.name}</td>
                <td>
                    {props.surname} </td>
                <td>
                    {props.telephone}</td>
                <td className="text-center">
                    <span class="badge badge-pill badge-soft-success font-size-12 ">{props.contacted}</span>
                </td>
                
                <td>
                <td className="d-flex justify-content-center"> <button onClick={()=> onViewClick()}
                    class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                    >
                    Voir Details</button> </td>
                </td>
                <td>
                    <div class="d-flex justify-content-center gap-3">
                        <a href="edit" onClick={()=> onEditClick()} class="text-success"><i class="mdi mdi-pencil font-size-18"></i></a>
                       
                    </div>
                </td>
            </tr>
           
        </>
    )
}
