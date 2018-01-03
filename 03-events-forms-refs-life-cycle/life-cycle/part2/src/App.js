import React, { Component } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDo List</h1>
        </header>
        <ToDoList />
      </div>
    );
  }
}

export default App;
