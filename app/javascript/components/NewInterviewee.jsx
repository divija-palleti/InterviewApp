import React from 'react'
import {NavLink} from 'react-router-dom'
function NewInterviewee() {
    return (
        <div>
        <h1> New Interviewee</h1>
        <div class="container">
            <form id="new_interviewee"  >
                <div class="form-group">
                  <label for="title">Name</label>
                  <input class="form-control" type="text" name="name" id="interviewee_name" required/>
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="interviewee_email" required/>
                </div>
                <div class="form-group">
                  <label for="resume">Resume(pdf only)</label>
                  <input class="form-control" type="file" name="resume" id="interviewee_resume" accept="application/pdf" required/>
                </div>
                
               
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    
                </div>
             
        </div>
        <div class="text-center"> <NavLink exact className="nav-link"  to="/Interviewees">Cancel </NavLink></div> 
        </div>
    )
}

export default NewInterviewee
