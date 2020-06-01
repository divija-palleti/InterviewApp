import {
    FETCH_INTERVIEWS_REQUEST,
    FETCH_INTERVIEWS_SUCCESS,
    FETCH_INTERVIEWS_FAILURE,
    POST_INTERVIEW_FAILURE,
    POST_INTERVIEW_REQUEST,
    POST_INTERVIEW_SUCCESS
  } from './interviewTypes'
  
  const initialState = {
    loading: false,
    interviews: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    const x = action.payload
    switch (action.type) {
      case FETCH_INTERVIEWS_REQUEST:
        return {
          ...state,
          loading: true
        }
    case POST_INTERVIEW_REQUEST:
         return {
            ...state,
            loading: true
        }
        
      case FETCH_INTERVIEWS_SUCCESS:
        return {
          loading: false,
          interviews: action.payload,
          error: ''
        }
        case POST_INTERVIEW_SUCCESS:
          y = {...interviews,x}
        return {
          loading: false,
          interviews: y,
          error: ''
        }
      case FETCH_INTERVIEWS_FAILURE:
        return {
          loading: false,
          interviews: [],
          error: action.payload
        }
        case POST_INTERVIEWS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer