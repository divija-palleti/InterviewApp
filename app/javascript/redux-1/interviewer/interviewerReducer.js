import {
    FETCH_INTERVIEWERS_REQUEST,
    FETCH_INTERVIEWERS_SUCCESS,
    FETCH_INTERVIEWERS_FAILURE,
    POST_INTERVIEWER_FAILURE,
    POST_INTERVIEWER_REQUEST,
    POST_INTERVIEWER_SUCCESS
  } from './interviewerTypes'
  
  const initialState = {
    loading: false,
    interviewers: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INTERVIEWERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case POST_INTERVIEWER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_INTERVIEWERS_SUCCESS:
        return {
          loading: false,
          interviewers: action.payload,
          error: ''
        }
      case FETCH_INTERVIEWERS_FAILURE:
        return {
          loading: false,
          interviewers: [],
          error: action.payload
        }
      case POST_INTERVIEWER_FAILURE:
          return {
            loading: false,
            error: action.payload
          }
      default: return state
    }
  }
  
  export default reducer