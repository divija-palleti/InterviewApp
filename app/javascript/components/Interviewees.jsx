import React from 'react'
import {NavLink} from 'react-router-dom'
function Interviewees() {
    return (
        <div>
        <div className="container mt-5">
            <div className="page-header">
              <h1>Interviewees</h1>
            </div>
            </div>
  
            <div className="container mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Resume</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>Name1</td>
                    <td>Email</td>
                    <td>Resume</td>
                </tr>
                     
             
              </tbody>
            </table>
            <div className="text-center">
                    
            <NavLink exact className="nav-link"  to="/">Cancel </NavLink>
                   
            </div>
            <div className="text-center">
            <NavLink exact className="nav-link"  to="/Interviewees/new">New Interviewee </NavLink>
                   
                    
                  
            </div>
  
            </div>
            
        </div>
    )
}

export default Interviewees
