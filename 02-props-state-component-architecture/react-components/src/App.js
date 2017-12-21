import React, { Component } from "react";
import ToDoList from "./ToDoList";
import Input from "./Input";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDo List</h1>
        </header>
        <main>
          <ToDoList />
          <Input />
        </main>
      </div>
    );
  }
}

export default App;
