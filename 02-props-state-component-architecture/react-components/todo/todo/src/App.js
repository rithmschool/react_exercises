import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Todo's">What's your Todo's?</h1>
          <p>
            <Link to="/todos/new">Add a todo</Link>
          </p>
          <p>
            <Link to="/todos">Show all todos</Link>
          </p>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
