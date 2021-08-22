import React from 'react';
//import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import FeedContainer from '@containers/feed';
import OptionsContainer from '@containers/options';
import Login from 'auth/login';
import Register from 'auth/register';

const AppRoutes = () => {
  return (

    <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/home">
          <FeedContainer/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
