import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's going on?</h2>
        </div>
        <TodoList/>
      </div>
    );
  }
}
