import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
function Interviewers() {

  const[interviewers, setInterviewers] = useState([])

  useEffect(()=>{

    axios
      .get('http://localhost:3000/interviewers')
      .then((res)=>{
        
        setInterviewers(res.data)
        
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const handleDelete = (id,e) => {
     
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      let path = `http://localhost:3000/interviewers/${id}`
      console.log(path)
      axios
        .delete(path)
        .then(response => {
          
          if(response.data.success)
           {
            alert('DELETED');
            location.reload();
           
           }
           else{
            alert('not DELETED')
           
           }
        })
        .catch(error => {
          console.log(error);
        });
    }
    }

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
                {
                  interviewers.map(interviewer=>(
                    <tr key={interviewer.id}>
                    <td>{interviewer.name}</td>
                    <td>{interviewer.desc}</td>
                    <td>{interviewer.email}</td>
                    <td > <button onClick={(e) => handleDelete(interviewer.id, e)}>Delete</button>   </td>
                    </tr>

                  ))
                }
              
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
