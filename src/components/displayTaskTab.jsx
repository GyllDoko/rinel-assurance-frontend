import React from 'react'
import TaskRow from './taskRow'

export default function DisplayTaskTab(props) {
    
    return (
        <div>
             <div class="table-responsive">
                <table class="table align-middle table-nowrap table-check">
                  <thead class="table-light">
                    <tr className="text-center">
                      <th class="align-middle">No</th>
                      <th class="align-middle">Date d'ajout</th>
                      <th class="align-middle">Sujet</th>
                      <th class="align-middle">Date de notifications</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {props.tabData.map((item, index) => (
                     <TaskRow id={index+1} key={item.id} edit_date={item.timestamp}  date={item.date} subject={item.subjects} />
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
    )
}
