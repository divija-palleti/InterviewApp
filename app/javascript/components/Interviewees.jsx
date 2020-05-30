import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchInterviewees } from '../redux'

function Interviewees({interviewees, fetchInterviewees}) {

  useEffect(()=>{
    fetchInterviewees()
  },[])

  const handleDelete = (id,e) => {
     
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      console.log(id)
      console.log("p")
      let path = `http://localhost:3000/interviewees/${id}`
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
                {
                  interviewees.map(interviewee=>(
                    <tr key={interviewee.id}>
                    <td>{interviewee.name}</td>
                    <td>{interviewee.email}</td>
                    <td><a href={`${interviewee.r_link}`}>Resume</a></td>
                    <td > <button onClick={(e) => handleDelete(interviewee.id, e)}>Delete</button>   </td>
                    </tr>
                  ))
                }
              
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
const mapStateToProps = state => {
  return {
    interviewees: state.interviewee.interviewees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInterviewees: () => dispatch(fetchInterviewees())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interviewees)
