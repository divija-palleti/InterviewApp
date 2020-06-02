import axios from 'axios'
import {NavLink} from 'react-router-dom'
import InterviewForm from './InterviewForm'
import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'


function EditInterview(props) {

    const { location: { state: {interview: interview} }} = props
    const { title: propTitle, desc: propDesc, start: propStart, end: propEnd,interviewer_id: propInterviewerId, participants_id: propParticipantsId } = interview
    const [title, setTitle] = useState(propTitle);
    const [desc, setDesc] = useState(propDesc);
    const [starttime, setStart] = useState(propStart);
    const [endtime, setEnd] = useState(propEnd);
    const [interviewer_id, setInterviewer] = useState(propInterviewerId);
    const [interviewee_id, setInterviewees] = useState(propParticipantsId);
    const initial = {title,desc,starttime,endtime,interviewer_id, interviewee_id}
    

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .patch(`http://localhost:3000/interviews/${props.location.state.interview.id}`, {
        interview: {
            title: title,
            desc: desc,
            endtime: endtime.endtime,
            starttime: starttime.starttime,
            interviewer_id: interviewer_id,
            interviewee_ids: interviewee_id
        },
        })
        .then(response => {
                if(response.data.success)
                {
                    alert("Interview Updated");
                   return <Redirect to="/" /> 
                }
                else{
                    var obj = json.errors;
                    alert("Interview not Updated");
                    for (x in obj) {
                        alert(`${x} - ${obj[x]}`);
                    } 
                }
        })
        .catch(error => {
            console.log(error)
        })
        event.target.reset()
      }

    const handleTitleChange = e => setTitle(e.target.value);
    const handleDescChange = e => setDesc(e.target.value);
    const handleStartChange = e => setStart({ starttime : e.target.value});
    const handleEndChange = e => setEnd({ endtime: e.target.value});
    const handleInterviewerChange = e => setInterviewer(e.target.value);
    const handleIntervieweeChange = e => {
        console.log(e.target.checked)
        console.log("check")
        let t = e.target.checked
        let id = e.target.value
        if(t)
        {
            setInterviewees([ ... interviewee_id,id]);
        }
        else{
            var index = interviewee_id.indexOf(e.target.value)
            var arr = [...interviewee_id]
            if (index !== -1) {
                arr.splice(index, 1);
                setInterviewees(arr);
              }
        }
         
    }


    return (
        <div> 
        <h1> Edit Interview</h1>
   
            <InterviewForm
            handleTitleChange={handleTitleChange}
            handleDescChange={handleDescChange}
            handleStartChange={handleStartChange}
            handleEndChange={handleEndChange}
            handleInterviewerChange={handleInterviewerChange}
            handleIntervieweeChange={handleIntervieweeChange}
            handleSubmit={handleSubmit}
            initial = {initial}
             />
            <div className="text-center"> <NavLink exact className="nav-link"  to="/">Cancel </NavLink></div>
        </div>
  
            
    )
}

export default EditInterview
