import React from 'react'
import {NavLink} from 'react-router-dom'
function Interviewers() {
    return (
        <div>
        <div className="container mt-5">
            <div className="page-header">
              <h1>Interviewers</h1>
            </div>
            </div>
  
            <div className="container mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
        
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Name1</td>
                    <td>Desc</td>
                    <td>Email</td>
                    </tr>
                     
                
              
              </tbody>
            </table>
            <div className="text-center">
            <NavLink exact className="nav-link"  to="/">Cancel </NavLink>
                   
            </div>
            <div className="text-center">
            <NavLink exact className="nav-link"  to="/Interviewers/new">New Interviewer </NavLink>
                    
            </div>
  
            </div>
  
            
        </div>
    )
}

export default Interviewers
