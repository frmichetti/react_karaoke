import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Home from './views/home';
import Link from './views/link';

export default props => (
  <Router history={hashHistory}>
    <Route path={'/home'} component={Home}/>
    <Route path={'/link'} component={Link}/>
    <Redirect from={'*'} to={'/home'}/>
  </Router>
)