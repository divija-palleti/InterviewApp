import axios from 'axios'
import {
  FETCH_INTERVIEWS_REQUEST,
  FETCH_INTERVIEWS_SUCCESS,
  FETCH_INTERVIEWS_FAILURE,
  POST_INTERVIEW_FAILURE,
  POST_INTERVIEW_REQUEST,
  POST_INTERVIEW_SUCCESS
} from './interviewTypes'

export const postInterview = (interview) => {
  return (dispatch) => {
    dispatch(postInterviewRequest())
   
    axios
      .post('http://localhost:3000/interviews',{interview})
      .then(response => {
        const{data: {success: success}}=response
        if(success){
            alert("Interview Created");
            dispatch(fetchInterviews());
            return <Redirect to="/" /> 
          }
        else{
            const{data: {errors: errObj}}=response
            alert("Interview not Created");
            Object.entries(errObj).forEach(([key, value]) => alert(`${key} ${value}`))
          }
      })
      .catch(error => {
        // error.message is the error message
        dispatch(postInterviewFailure(error.message))
      })
  }
}

export const fetchInterviews = () => {
  return (dispatch) => {
    dispatch(fetchInterviewsRequest())
    axios
      .get('http://localhost:3000/interviews')
      .then(response => {
        // response.data is the interviews
        const{data: {interviews: interviews}} = response
        dispatch(fetchInterviewsSuccess(interviews))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchInterviewsFailure(error.message))
      })
  }
}

export const postInterviewRequest = () => {
  return {
    type: POST_INTERVIEW_REQUEST
  }
}

export const postInterviewSuccess = interview => {

  return {
    type: POST_INTERVIEW_SUCCESS,
    payload: interview
  }
}

export const postInterviewFailure = error => {
  return {
    type: POST_INTERVIEW_FAILURE,
    payload: error
  }
}


export const fetchInterviewsRequest = () => {
  return {
    type: FETCH_INTERVIEWS_REQUEST
  }
}

export const fetchInterviewsSuccess = interviews => {
  return {
    type: FETCH_INTERVIEWS_SUCCESS,
    payload: interviews
  }
}

export const fetchInterviewsFailure = error => {
  return {
    type: FETCH_INTERVIEWS_FAILURE,
    payload: error
  }
}