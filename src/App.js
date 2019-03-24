import React, { Component } from 'react';
import store from './store.js';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/home" component={HomePage} />
      </Provider>
      </div>
    );
  }
}

export default App;