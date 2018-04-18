import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Todo from '../containers/Todo';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    );
  }
}
