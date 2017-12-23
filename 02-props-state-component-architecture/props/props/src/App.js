import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
        </header>
        <Pokedex />
      </div>
    );
  }
}

export default App;
