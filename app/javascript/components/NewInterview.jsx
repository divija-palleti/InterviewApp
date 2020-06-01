import axios from 'axios'
import {NavLink} from 'react-router-dom'
import InterviewForm from './InterviewForm'
import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'
import { postInterview } from '../redux'

function NewInterview({interviews, postInterviews}) {

    let [title, setTitle] = useState('');
    let [desc, setDesc] = useState('');
    let [starttime, setStart] = useState({starttime : new Date()});
    let [endtime, setEnd] = useState({endtime : new Date()});
    let [interviewer_id, setInterviewer] = useState('');
    let [interviewee_id, setInterviewees] = useState([]);

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

    const handleSubmit = event => {
        event.preventDefault();
        postInterview({ interview: {
                title: title,
                desc: desc,
                endtime: endtime.endtime,
                starttime: starttime.starttime,
                interviewer_id: interviewer_id,
                interviewee_ids: interviewee_id
              
             }})
        // axios
        // .post('http://localhost:3000/interviews', {
        // interview: {
        //     title: title,
        //     desc: desc,
        //     endtime: endtime.endtime,
        //     starttime: starttime.starttime,
        //     interviewer_id: interviewer_id,
        //     interviewee_ids: interviewee_id
          
        // },
        // })
        // .then(response => {
                
        //         if(response.data.success)
        //         {
        //             alert("Interview Created");
        //            return <Redirect to="/" /> 
        //         }
        //         else{
        //             var obj = json.errors;
        //             alert("Interview not Created");
        //             for (x in obj) {
        //                 alert(`${x} - ${obj[x]}`);
        //             }
                    
        //         }
        // })
        // .catch(error => {
        //     console.log(error)
        // })
   
       
        // e.target.reset()
      }
        
    return (
        <div> 
        <h1> New Interview</h1>
            <InterviewForm
            handleTitleChange={handleTitleChange}
            handleDescChange={handleDescChange}
            handleStartChange={handleStartChange}
            handleEndChange={handleEndChange}
            handleInterviewerChange={handleInterviewerChange}
            handleIntervieweeChange={handleIntervieweeChange}
            handleSubmit={handleSubmit}
             />
            <div className="text-center"> <NavLink exact className="nav-link"  to="/">Cancel </NavLink></div>
        </div>

        
        
             
    
            
            
       
    )
}

const mapStateToProps = state => {
    return {
      interviews: state.interview.interviews
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      postInterviews: () => dispatch(postInterviews())
    }
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewInterview)
