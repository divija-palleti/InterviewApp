import {
    FETCH_INTERVIEWS_REQUEST,
    FETCH_INTERVIEWS_SUCCESS,
    FETCH_INTERVIEWS_FAILURE
  } from './interviewTypes'
  
  const initialState = {
    loading: false,
    interviews: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INTERVIEWS_REQUEST:
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
      case FETCH_INTERVIEWS_FAILURE:
        return {
          loading: false,
          interviews: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer