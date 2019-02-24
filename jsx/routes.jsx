import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Home from './home';

export default props => (
  <Router history={hashHistory}>
    <Route path={'/home'} component={Home}/>
    <Redirect from={'*'} to={'/home'}/>
  </Router>
)