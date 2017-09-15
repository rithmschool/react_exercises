import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Square from "./Square";

class App extends Component {
  render() {
    let buffer = [];
    for (var i = 0; i < 24; i++) buffer.push(<Square key={i} />);
    return <div className="App">{buffer}</div>;
  }
}

export default App;
