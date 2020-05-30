import axios from 'axios'
import {
  FETCH_INTERVIEWERS_REQUEST,
  FETCH_INTERVIEWERS_SUCCESS,
  FETCH_INTERVIEWERS_FAILURE
} from './interviewerTypes'


export const fetchInterviewers = () => {
  return (dispatch) => {
    dispatch(fetchInterviewersRequest())
    axios
      .get('http://localhost:3000/interviewers')
      .then(response => {
        // response.data is the interviewers
        const interviewers = response.data
        console.log(interviewers)
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