import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login/login';

import Layout from '../components/layout/Layout';
import AuthRouter from '../components/layout/AuthRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} exact path="/login" />
        <AuthRouter component={Layout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
