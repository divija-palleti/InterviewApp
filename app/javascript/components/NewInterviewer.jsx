import React from 'react'
import {NavLink} from 'react-router-dom'
function NewInterviewer() {
    return (
        <div>
        <h1> New Interviewer</h1>
        <div className="container">
            <form id="new_interviewer">
                <div className="form-group">
                  <label for="title">Name</label>
                  <input className="form-control" type="text" name="name" id="interviewer_name" required />
                  
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input className="form-control" type="email" name="email" id="interview_email" required />
                </div>
                <div className="form-group">
                  <label for="desc">Desc</label>
                  <input className="form-control" type="text" name="desc" id="interview_desc" value=""/>
                </div>
                
               
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div className="text-center">
                <div class="text-center"> <NavLink exact className="nav-link"  to="/Interviewers">Cancel </NavLink></div> 
                    
                </div>
             
        </div>
            
        </div>
    )
}

export default NewInterviewer
