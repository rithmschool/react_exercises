import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Nav />
        <TodoList />
      </div>
    );
  }
}

export default App;
