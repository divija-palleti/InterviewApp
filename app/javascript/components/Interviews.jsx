import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

function Interviews() {


    const[interviews, setInterviews] = useState([])

    useEffect(()=>{

      axios
        .get('http://localhost:3000/interviews')
        .then((res)=>{
         
          setInterviews(res.data.interviews)
         
        })
        .catch(err => {
          console.log(err)
        })
    },[])

    const getParticipantList = (participants)=>{
      let p='';
        for(var i=0;i<participants.length;i++)
        {
          p+=`${participants[i]}\n`
         
        }
      return p
    }

    return (
        <div>
                
          <div className="container mt-5">
          <div className="page-header">
            <h1>Interviews</h1>
          </div>
          </div>

          <div className="container mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th ></th>
                <th>Title</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Interviewer</th>
                <th>Interviewees</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
                {
                  interviews.map(interview =>(
                      
                    <tr key={interview.id}>
                      <td> <NavLink exact className="nav-link"  to={`/interviews/${interview.id}/edit`}>Edit </NavLink>   </td>
                      <td>{interview.title}</td>
                      <td>{Date(interview.start)}</td>
                      <td>{Date(interview.end)}</td>
                      <td>{interview.interviewer_email}</td>

                      <td>{getParticipantList(interview.participants)}</td>
                      <td>  Delete </td>
                    </tr>

                  ) )}
                   
            </tbody>
          </table>

          </div>
            
        </div>
    )
}

export default Interviews
