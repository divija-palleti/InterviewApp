
import Interviews   from '../views/pages/Interviews.js'
import Interviewers   from '../views/pages/Interviewers.js'
import Interviewees   from '../views/pages/Interviewees.js'
import New_interview from '../views/pages/NewInterview.js'
import New_interviewer from '../views/pages/NewInterviewer.js'
import New_interviewee from '../views/pages/NewInterviewee.js'
import Edit_interview from '../views/pages/EditInterview.js'

const routes = {
    '/'             : Interviews
    , '/interviewers'   : Interviewers
    , '/interviewees'   : Interviewees
    , '/new_interview'   : New_interview
    , '/new_interviewer'   : New_interviewer
    , '/new_interviewee'   : New_interviewee
    , '/interview/:id/edit'   : Edit_interview
 
    
};
export default routes;