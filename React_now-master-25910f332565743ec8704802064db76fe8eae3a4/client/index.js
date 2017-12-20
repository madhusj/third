import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './views/Login';
import Signup from './views/Signup';
import Movie from './views/Movie';

import {BrowserRouter as Router, Route} from 'react-router-dom';

injectTapEventPlugin();

function handleTouchTap() {
  console.log('User Tapped Button');
}

ReactDOM.render(<MuiThemeProvider>
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={Signup} />
      <Route path="/app1" component={Movie} />
    </div>
  </Router>
</MuiThemeProvider>, document.getElementById('root'));
