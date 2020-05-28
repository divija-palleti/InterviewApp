import React from 'react'
import {NavLink} from 'react-router-dom'

function NewInterview() {
    return (
        <div> 
        <h1> New Interview</h1>
            <div className="container">
                <form id="new_interview" >
                    <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" id="interview_title" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Desc">Desc</label>
                    <input className="form-control" type="text" name="desc" id="interview_desc" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="starttime">Start time</label>
                        <input type="datetime-local" name="starttime" className="form-control" id="interview_start" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endtime">End time</label>
                        <input type="datetime-local" name="endtime" className="form-control" id="interview_end" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interviewer">Interviewer</label>
                        <select id="interview_interviewer" name="interviewer_id">
                            
                            
                        </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="interviewee">Interviewee</label>
                    

                   
                    </div>
        
                    <button type="submit" name="submit" className="btn btn-primary">Submit</button>


                </form>
            </div>
            <div class="text-center"> <NavLink exact className="nav-link"  to="/">Cancel </NavLink></div>
        </div>

        
        
             
    
            
            
       
    )
}

export default NewInterview
