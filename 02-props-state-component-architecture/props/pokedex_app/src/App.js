import React, { Component } from 'react';
import './App.css';
import Pokedex from './pokedex';
import { render } from "react-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Pokedex />
      </div>
    );
  }
}

export default App;
