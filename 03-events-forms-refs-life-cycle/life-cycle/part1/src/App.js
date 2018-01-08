import React, { Component } from "react";
import GifList from "./GifList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy party</h1>
        </header>
        <GifList />
      </div>
    );
  }
}

export default App;

