import React, { Component } from 'react';
import './App.css';
import Boxes from './boxes'
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boxes />
      </div>
    );
  }
}

export default App;
