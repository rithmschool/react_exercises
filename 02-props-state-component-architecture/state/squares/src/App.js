import React, { Component } from "react";
import "./App.css";
import Square from "./Square";

function randomRGBValue() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: generateSquareStates() };

    function generateSquareStates() {
      let numSquares = 24;
      let squareStates = [];
      for (let i = 0; i < numSquares; i++) {
        squareStates.push({ id: i, color: randomRGBValue() });
      }
      return squareStates;
    }

    setInterval(() => {
      let newSquares = Array.from(this.state.squares);
      let i = Math.round(Math.random() * 23);
      newSquares[i] = { id: i, color: randomRGBValue() };
      this.setState({
        squares: newSquares
      });
    }, 300);
  }

  render() {
    let squares = this.state.squares.map(s => (
      <Square key={s.id} color={s.color} />
    ));
    return <div className="App">{squares}</div>;
  }
}

export default App;
