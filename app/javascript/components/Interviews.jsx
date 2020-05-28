import React from 'react'
import {NavLink} from 'react-router-dom'
function Interviews() {
    return (
        <div>
                
          <div className="container mt-5">
          <div className="page-header">

            <h1>Interviews</h1>
          </div>
          </div>

          <div className="container mt-4">
          <table className="table table-striped">
        
            <thead>
              <tr>
                <th ></th>
                <th>Title</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Interviewer</th>
                <th>Interviewees</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
             
                
              <tr>
                <td> <NavLink exact className="nav-link"  to="/interviews/1/edit">Edit </NavLink>   </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
              
                <td>  Delete </td>
              </tr>
                
               
            </tbody>
          </table>

          </div>
            
        </div>
    )
}

export default Interviews
