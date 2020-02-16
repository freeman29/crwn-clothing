import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
