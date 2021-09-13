import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('blog-userinfo-token') ? true : false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to={'/login'} />
      }
    />
  );
};

export default withRouter(AuthRouter);
