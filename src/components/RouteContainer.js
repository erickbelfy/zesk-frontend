import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ErrorComponent from './common/ErrorComponent';

export class RouteContainer extends ErrorComponent {
  render() {
    return (
      <Switch>
        <Route exact path="${config.routes.creditHealth}" />
      </Switch>
    );
  }
}
