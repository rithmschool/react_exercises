import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>How good is your memory?</h2>
        </div>
        <Board
          endGameCounter={0}
          totalTurns={10}
          prevColor="lightgray"
          disabled={false}
        />
      </div>
    );
  }
}

export default App;
