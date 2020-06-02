import axios from 'axios'
import {
    FETCH_INTERVIEWERS_REQUEST,
    FETCH_INTERVIEWERS_SUCCESS,
    FETCH_INTERVIEWERS_FAILURE,
    POST_INTERVIEWER_FAILURE,
    POST_INTERVIEWER_REQUEST,
    POST_INTERVIEWER_SUCCESS
} from './interviewerTypes'

export const postInterviewer = (interviewer) => {
  return (dispatch) => {
    dispatch(postInterviewerRequest())
   
    axios
      .post('http://localhost:3000/interviewers',{interviewer})
      .then(response => {
        const{data: {success: success}}=response
        if(success){
            alert("Interviewer Created");
            dispatch(fetchInterviewers());
            return <Redirect to="/" /> 
          }
        else{
          const{data: {errors: errObj}}=response
          alert("Interviewer not Created");
          Object.entries(errObj).forEach(([key, value]) => alert(`${key} ${value}`))
          }
      })
      .catch(error => {
        // error.message is the error message
        dispatch(postInterviewerFailure(error.message))
      })
  }
}


export const fetchInterviewers = () => {
  return (dispatch) => {
    dispatch(fetchInterviewersRequest())
    axios
      .get('http://localhost:3000/interviewers')
      .then(response => {
        // response.data is the interviewers
        const{data: interviewers} = response
        dispatch(fetchInterviewersSuccess(interviewers))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchInterviewersFailure(error.message))
      })
  }
}

export const fetchInterviewersRequest = () => {
  return {
    type: FETCH_INTERVIEWERS_REQUEST
  }
}

export const postInterviewerRequest = () => {
  return {
    type: POST_INTERVIEWER_REQUEST
  }
}

export const fetchInterviewersSuccess = interviewers => {
  return {
    type: FETCH_INTERVIEWERS_SUCCESS,
    payload: interviewers
  }
}

export const fetchInterviewersFailure = error => {
  return {
    type: FETCH_INTERVIEWERS_FAILURE,
    payload: error
  }
}
export const postInterviewerFailure = error => {
  return {
    type: POST_INTERVIEWER_FAILURE,
    payload: error
  }
}