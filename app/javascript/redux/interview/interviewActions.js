import axios from 'axios'
import {
  FETCH_INTERVIEWS_REQUEST,
  FETCH_INTERVIEWS_SUCCESS,
  FETCH_INTERVIEWS_FAILURE
} from './interviewTypes'


export const fetchInterviews = () => {
  return (dispatch) => {
    dispatch(fetchInterviewsRequest())
    axios
      .get('http://localhost:3000/interviews')
      .then(response => {
        // response.data is the interviews
        const interviews = response.data.interviews
        console.log(interviews)
        dispatch(fetchInterviewsSuccess(interviews))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchInterviewsFailure(error.message))
      })
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