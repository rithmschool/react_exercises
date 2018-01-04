import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TodoList</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
