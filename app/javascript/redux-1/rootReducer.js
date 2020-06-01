import { combineReducers } from 'redux'
import interviewReducer from './interview/interviewReducer'
import interviewerReducer from './interviewer/interviewerReducer'
import intervieweeReducer from './interviewee/intervieweeReducer'

const rootReducer = combineReducers({
  interviewer: interviewerReducer,
  interviewee: intervieweeReducer,
  interview: interviewReducer
})

export default rootReducer