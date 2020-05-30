import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import {Route, NavLink, Switch} from 'react-router-dom'
import Interviews from './Interviews';
import Interviewers from './Interviewers';
import Interviewees from './Interviewees';
import NewInterview from './NewInterview';
import NewInterviewer from './NewInterviewer';
import NewInterviewee from './NewInterviewee';
import EditInterview from './EditInterview';

const App = (props) => {
  return (
    <Provider store={store}>
    <div className="App">
        
          <div className="container">
            <Navigation />
            <Main />
          </div>
       
      </div>
      </Provider>
  );
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">

       <div className="navbar-item"><NavLink exact className="nav-link"  to="/">Interview App </NavLink></div>
                        
    </div>
               
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-item nav-link active"><NavLink exact className="nav-link" activeClassName="active" to="/Interviews/new"> New Interview </NavLink></div>
        <div className="nav-item nav-link active" ><NavLink exact className="nav-link" activeClassName="active" to="/Interviewers">Interviewers </NavLink></div>
        <div className="nav-item nav-link active"><NavLink exact className="nav-link" activeClassName="active" to="/Interviewees"> Interviewees </NavLink></div>
        </div>
    </div>
  </nav>


 
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Interviews} />
    <Route exact path="/Interviews/new" component={NewInterview} />
    <Route exact path="/Interviewers" component={Interviewers} />
    <Route exact path="/Interviewers/new" component={NewInterviewer} />
    <Route exact path="/Interviewees" component={Interviewees} />
    <Route exact path="/Interviewees/new" component={NewInterviewee} />
    <Route exact path="/interviews/:id/edit" component={EditInterview} />
  </Switch>
);

export default App;