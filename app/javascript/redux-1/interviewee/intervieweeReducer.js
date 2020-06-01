import {
  FETCH_INTERVIEWEES_REQUEST,
  FETCH_INTERVIEWEES_SUCCESS,
  FETCH_INTERVIEWEES_FAILURE,
  POST_INTERVIEWEE_FAILURE,
  POST_INTERVIEWEE_REQUEST,
  POST_INTERVIEWEE_SUCCESS
  } from './intervieweeTypes'
  
  const initialState = {
    loading: false,
    interviewees: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INTERVIEWEES_REQUEST:
        return {
          ...state,
          loading: true
        }
      case POST_INTERVIEWEE_REQUEST:
        return {
            ...state,
            loading: true
        }
      case FETCH_INTERVIEWEES_SUCCESS:
        return {
          loading: false,
          interviewees: action.payload,
          error: ''
        }
      case FETCH_INTERVIEWEES_FAILURE:
        return {
          loading: false,
          interviewees: [],
          error: action.payload
        }

      case POST_INTERVIEWEE_FAILURE:
        return {
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer