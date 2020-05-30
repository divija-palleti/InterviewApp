import { combineReducers } from 'redux'
import interviewReducer from './interview/interviewReducer'
import interviewerReducer from './interviewer/interviewerReducer'

const rootReducer = combineReducers({
  interviewer: interviewerReducer,
  interview: interviewReducer
})

export default rootReducer