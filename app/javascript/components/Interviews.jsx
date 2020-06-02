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
      participants.forEach(participant_email => p+=`${participant_email}\n`)
      return p
    }

    const handleDelete = (id,e) => {
     
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      console.log(id)
      console.log("p")
      let path = `http://localhost:3000/interviews/${id}`
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
                      <td> <NavLink exact className="nav-link"  to={{
                                                                        pathname :`/interviews/${interview.id}/edit`,
                                                                        state: { interview, }
                                                                    }}>Edit </NavLink>   </td>
                      <td>{interview.title}</td>
                      <td>{Date(interview.start)}</td>
                      <td>{Date(interview.end)}</td>
                      <td>{interview.interviewer_email}</td>
                      <td>{getParticipantList(interview.participants)}</td>
                      <td > <button onClick={(e) => handleDelete(interview.id, e)}>Delete</button>   </td>
                    </tr>

                  ) )}
                   
            </tbody>
          </table>

          </div>
            
        </div>
    )
}

export default Interviews
