import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchInterviewers } from '../redux-1'

function Interviewers({interviewers, fetchInterviewers}) {

  // const[interviewers, setInterviewers] = useState([])

  useEffect(()=>{
    fetchInterviewers()
  },[])

  const handleDelete = (id,e) => {
     
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      console.log(id)
      console.log("p")
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
const mapStateToProps = state => {
  return {
    interviewers: state.interviewer.interviewers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInterviewers: () => dispatch(fetchInterviewers())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interviewers)
