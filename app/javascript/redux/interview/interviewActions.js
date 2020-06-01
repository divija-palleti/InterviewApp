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
        if(response.data.success)
                {
                    alert("Interview Created");
                    console.log(res)
                    dispatch(postInterviewSuccess(interview))
                   return <Redirect to="/" /> 
                }
        else{
                    var obj = json.errors;
                    alert("Interview not Created");
                    for (x in obj) {
                        alert(`${x} - ${obj[x]}`);
            }
                    
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