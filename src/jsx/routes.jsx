import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Home from './views/home';
import Link from './views/link';
import Player from './views/player';

export default props => (
  <Router history={hashHistory}>
    <Route path={'/home'} component={Home}/>
    <Route path={'/link'} component={Link}/>
    <Route path={'/player'} component={Player}/>
    <Redirect from={'*'} to={'/home'}/>
  </Router>
)