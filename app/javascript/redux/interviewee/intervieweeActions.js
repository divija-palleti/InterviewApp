import axios from 'axios'
import {
  FETCH_INTERVIEWEES_REQUEST,
  FETCH_INTERVIEWEES_SUCCESS,
  FETCH_INTERVIEWEES_FAILURE
} from './intervieweeTypes'


export const fetchInterviewees = () => {
  return (dispatch) => {
    dispatch(fetchIntervieweesRequest())
    axios
      .get('http://localhost:3000/interviewees')
      .then(response => {
        // response.data is the interviewees
        const interviewees = response.data.interviewees
        console.log(interviewees)
        dispatch(fetchIntervieweesSuccess(interviewees))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchIntervieweesFailure(error.message))
      })
  }
}

export const fetchIntervieweesRequest = () => {
  return {
    type: FETCH_INTERVIEWEES_REQUEST
  }
}

export const fetchIntervieweesSuccess = interviewees => {
  return {
    type: FETCH_INTERVIEWEES_SUCCESS,
    payload: interviewees
  }
}

export const fetchIntervieweesFailure = error => {
  return {
    type: FETCH_INTERVIEWEES_FAILURE,
    payload: error
  }
}