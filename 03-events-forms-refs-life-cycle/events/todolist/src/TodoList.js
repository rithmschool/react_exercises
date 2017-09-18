import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      { title: "Buy cat food", description: "Go to chewy and set an auto fill order" },
      { title: "Buy cat toys", description: "Buy toys at Petsmart" },
      { title: "Buy cat", description: "Go to HSSV" },
      { title: "Buy cat carrier", description: "Go to Petco" },
      { title: "Buy cat scratcher", description: "Get a piece of wood" },
      { title: "Buy cat leash", description: "Get some soft rope" },
      { title: "Buy cat litter", description: "Go to amazon and get Dr. Elsey's best cat litter" }
      ]
    }
  }

  handleRemove(idx) {
    let currentTodos = this.state.todos;
    let newTodos = currentTodos.slice(0, idx).concat(currentTodos.slice(idx+1));
    this.setState({
      todos: newTodos
    });
  }

  render() {
    let todos = this.state.todos.map((item, idx) => (
      <Todo title={item.title} description={item.description} key={idx} removeTodo={this.handleRemove.bind(this, idx)} />
    ));
    return (
      <div>{todos}</div>
    )
  }
}

export default TodoList;