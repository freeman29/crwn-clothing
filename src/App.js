import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPAge from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPAge} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
