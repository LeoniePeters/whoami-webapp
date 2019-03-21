import React, { Component } from 'react';
import star1 from './images/star-r2b3.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={star1} alt='star1' id="star1" />

      </div>
    );
  }
}

export default App;