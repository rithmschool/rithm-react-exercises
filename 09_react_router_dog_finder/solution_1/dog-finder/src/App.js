import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dog from './Dog';
import Dogs from './Dogs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* Render the Dogs component for all the dogs */}
          <Route exact path="/dogs" component={Dogs} />
          {/* Render the Dogs component for a specific dog */}
          <Route exact path="/dogs/:name" component={Dogs} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
