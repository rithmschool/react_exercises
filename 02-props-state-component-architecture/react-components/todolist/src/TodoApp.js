import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';
import TodoList from './TodoList'

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
