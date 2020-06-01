import axios from 'axios'
import {
  FETCH_INTERVIEWEES_REQUEST,
  FETCH_INTERVIEWEES_SUCCESS,
  FETCH_INTERVIEWEES_FAILURE,
  POST_INTERVIEWEE_FAILURE,
  POST_INTERVIEWEE_REQUEST,
  POST_INTERVIEWEE_SUCCESS
} from './intervieweeTypes'


export const postInterviewee = (interviewee) => {
  return (dispatch) => {
    dispatch(postIntervieweeRequest())
   
    axios
      .post('http://localhost:3000/interviewees',{interviewee})
      .then(response => {
     
        if(response.data.success)
                {
                   alert("Interviewee Created");
                   dispatch(fetchInterviewees());
                   return <Redirect to="/" /> 
                }
        else{
                    var obj = json.errors;
                    alert("Interviewee not Created");
                    for (x in obj) {
                        alert(`${x} - ${obj[x]}`);
                     }
                    
                }
      })
      .catch(error => {
        // error.message is the error message
        dispatch(postIntervieweeFailure(error.message))
      })
  }
}


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

export const postIntervieweeRequest = () => {
  return {
    type: POST_INTERVIEWEE_REQUEST
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

export const postIntervieweeFailure = error => {
  return {
    type: POST_INTERVIEWEE_FAILURE,
    payload: error
  }
}