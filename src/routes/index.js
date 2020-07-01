import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import About from 'views/About';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={props => <route.component {...props} routes={route.routes} />}
        />
      ))}
    </Switch>
  );
}

export default Routes;
