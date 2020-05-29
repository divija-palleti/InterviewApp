import axios from 'axios'
import {NavLink} from 'react-router-dom'
import InterviewForm from './InterviewForm'
import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'


function EditInterview(props) {
   
   
    let [title, setTitle] = useState(props.location.state.interview.title);
    let [desc, setDesc] = useState(props.location.state.interview.desc);
    let [starttime, setStart] = useState({starttime : props.location.state.interview.start});
    let [endtime, setEnd] = useState({endtime : props.location.state.interview.end});
    let [interviewer_id, setInterviewer] = useState( props.location.state.interview.interviewer_id);
    let [interviewee_id, setInterviewees] = useState(props.location.state.interview.participants_id);
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
