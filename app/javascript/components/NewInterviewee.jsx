import React, {useState} from 'react'
import  { Redirect } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { postInterviewee } from '../redux-1'
import { connect } from 'react-redux'

function NewInterviewee({postInterviewee}) {

  const[name, setName] = useState('') 
  const[email, setEmail] = useState('') 
  const[resume, setResume] = useState(null) 

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleResumeChange = e => setResume(e.target.files[0]);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData() 
    data.append('resume', resume)
    data.append('name', name)
    data.append('email', email)
    postInterviewee(data)
    // axios
           
    //         .post('http://localhost:3000/interviewees',data)
    //         .then(response => {
            
    //         if(response.data.success)
    //         {
    //             alert("Interviewee Created");
    //            return <Redirect to="/" /> 
    //         }
    //         else{
    //             var obj = json.errors;
    //             alert("Interviewee not Created");
    //             for (x in obj) {
    //                 alert(`${x} - ${obj[x]}`);
    //             }
                
    //         }
    // })
    // .catch(error => {
    //     console.log(error)
    // })

   console.log(name,email,resume)

  }
  
    return (
        <div>
        <h1> New Interviewee</h1>
        <div className="container">
            <form id="new_interviewee" onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="title">Name</label>
                  <input className="form-control" type="text" name="name" id="interviewee_name" onChange={handleNameChange} required/>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control" type="email" name="email" id="interviewee_email" onChange={handleEmailChange}required/>
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Resume(pdf only)</label>
                  <input className="form-control" type="file" name="resume" id="interviewee_resume" accept="application/pdf" onChange={handleResumeChange}required/>
                </div>
                
               
                <button type="submit" name="submit" className="btn btn-primary">Submit</button>
               
            </form>
                <div className="text-center">
                    
                </div>
             
        </div>
        <div className="text-center"> <NavLink exact className="nav-link"  to="/Interviewees">Cancel </NavLink></div> 
        </div>
    )
}



const mapDispatchToProps = dispatch => {
  return {
    postInterviewee: (data) => dispatch(postInterviewee(data))
  }
}

export default connect(  
  undefined,
  mapDispatchToProps
)(NewInterviewee)
