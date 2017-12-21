import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList"

class App extends Component {
  render() {
    return (
      <div className="centered">
        <h1>To Do</h1>
        <TodoList className="App"/>
      </div>
    );
  }
}

export default App;
