import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import axios from 'axios'


function NewInterviewer() {

const[name, setName] = useState('') 
const[email, setEmail] = useState('') 
const[desc, setDesc] = useState('') 
const handleNameChange = e => setName(e.target.value);
const handleEmailChange = e => setEmail(e.target.value);
const handleDescChange = e => setDesc(e.target.value);
const handleSubmit = event => {
  event.preventDefault();
  axios
  .post('http://localhost:3000/interviewers', {
  interviewer: {
      name: name,
      desc: desc,
      email:email
    
  },
  })
  .then(response => {
          
          if(response.data.success)
          {
              alert("Interviewer Created");
              event.target.reset()
             return <Redirect to="/" /> 
          }
          else{
              var obj = json.errors;
              alert("Interviewer not Created");
              for (x in obj) {
                  alert(`${x} - ${obj[x]}`);
              }
              
          }
  })
  .catch(error => {
      console.log(error)
  })

 
  // event.target.reset()
}
  


    return (
        <div>
        <h1> New Interviewer</h1>
        <div className="container">
            <form id="new_interviewer"onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="title">Name</label>
                  <input className="form-control" type="text" name="name" id="interviewer_name" required onChange={handleNameChange}/>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control" type="email" name="email" id="interview_email" required onChange={handleEmailChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Desc</label>
                  <input className="form-control"  onChange={handleDescChange} type="text" name="desc" id="interview_desc" value=""/>
                </div>
                
               
                <button type="submit" name="submit" className="btn btn-primary">Submit</button>
               
            </form>
                <div className="text-center">
                <div className="text-center"> <NavLink exact className="nav-link"  to="/Interviewers">Cancel </NavLink></div> 
                    
                </div>
             
        </div>
            
        </div>
    )
}

export default NewInterviewer
