import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./App";
import { HomePage, HomeRoutes  } from  './pages/home/index';

export default (
  <Route component={App} path={App.path}>
      <IndexRoute component={ HomePage } />
      { HomeRoutes }
  </Route>
);
