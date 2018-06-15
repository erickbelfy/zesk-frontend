import React, { Component } from 'react';
import { Router } from 'react-router';
import RootComponent from './components/RootComponent';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <RootComponent />
      </Router>
    );
  }
}

export default App;
