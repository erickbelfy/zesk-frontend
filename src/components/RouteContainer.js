import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import config from '../config';
import ErrorComponent from './common/ErrorComponent';
import CreditHealth from './screens/credit-health';
console.log(config.routes.creditHealth);
console.log(config.routes);
class RouteContainer extends ErrorComponent {
  render() {
    return (
      <Switch>
        <Route exact path={`${config.routes.creditHealth}`} component={CreditHealth} />
        <Redirect to={`${config.routes.creditHealth}`} />
      </Switch>
    );
  }
}

export default RouteContainer;
