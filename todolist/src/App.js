import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">todo list yay</h1>
          <Link to="/todos/new" className="Header-link">
            add new todo
          </Link>
          <br />
          <Link to="/todos" className="Header-link">
            all todos
          </Link>
        </header>

        <TodoList />
      </div>
    );
  }
}

export default App;
