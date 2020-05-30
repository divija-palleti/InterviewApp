import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchInterviewers } from '../redux'



function InterviewForm({ interviewers, fetchInterviewers, handleTitleChange, handleDescChange, handleStartChange, handleEndChange, handleInterviewerChange, handleIntervieweeChange, handleSubmit , initial={}}) {
    
    const[interviewees, setInterviewees] = useState([])

    useEffect(()=>{
        fetchInterviewers()


        axios
        .get('http://localhost:3000/interviewees')
        .then((res)=>{
            console.log(res.data)
            setInterviewees(res.data.interviewees)
            console.log(interviewees);
        })
        .catch(err => {
            console.log(err)
        })

    },[])
        
        
    
    return (
        <div> 
     
            <div className="container">
                <form id="new_interview" acceptCharset="UTF-8" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" id="interview_title" onChange={handleTitleChange}  defaultValue={initial.title || ''} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Desc">Desc</label>
                        <input className="form-control" type="text" name="desc" id="interview_desc" onChange={handleDescChange} defaultValue={initial.desc || ''}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="starttime">Start time</label>
                        <input type="datetime-local" name="starttime" className="form-control" id="interview_start" onChange={handleStartChange} defaultValue={initial.starttime || ''} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endtime">End time</label>
                        <input type="datetime-local" name="endtime" className="form-control" id="interview_end" onChange={handleEndChange} defaultValue={initial.endtime || ''} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interviewer">Interviewer</label>
                        <select id="interview_interviewer" name="interviewer_id" onChange={handleInterviewerChange} defaultValue={initial.interviewer_id || ''}>
                           
                            {
                                interviewers.map(interviewer => (

                                    
                                    
                                    <option key={interviewer.id} value={interviewer.id} >{interviewer.email}</option>

                                ))
                            }
                            
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="interviewee">Interviewee</label>

                            { 
                                 interviewees.map(interviewee => (
                                <div key={interviewee.id}>
                                <label htmlFor={interviewee.id}> {interviewee.email}</label>
                                <input type="checkbox" key={interviewee.id} id={interviewee.id} name="interviewee_id"  value={interviewee.id} onChange={handleIntervieweeChange} />
                                </div>

                            ))
                            }
                    

                   
                    </div>
        
                    <button type="submit" name="submit" className="btn btn-primary">Submit</button>


                </form>
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
  )(InterviewForm)
