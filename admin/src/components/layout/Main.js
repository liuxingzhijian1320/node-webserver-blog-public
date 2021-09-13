import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../router/routes';

const myMain = () => {
  return (
    <Switch>
      {routes.map((ele) => (
        <Route
          render={() => <ele.component />}
          key={ele.path}
          path={ele.path}
        />
      ))}
      <Redirect from="/" exact to="/dashboard" />
      <Redirect to="/error/404" />
    </Switch>
  );
};

export default myMain;
