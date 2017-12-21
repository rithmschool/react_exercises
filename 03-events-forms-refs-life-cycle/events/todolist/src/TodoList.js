import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      { id: 0, title: "Buy cat food", description: "Go to chewy and set an auto fill order" },
      { id: 1, title: "Buy cat toys", description: "Buy toys at Petsmart" },
      { id: 2, title: "Buy cat", description: "Go to HSSV" },
      { id: 3, title: "Buy cat carrier", description: "Go to Petco" },
      { id: 4, title: "Buy cat scratcher", description: "Get a piece of wood" },
      { id: 5, title: "Buy cat leash", description: "Get some soft rope" },
      { id: 6, title: "Buy cat litter", description: "Go to amazon and get Dr. Elsey's best cat litter" }
      ],
      nextID: 7
    }

  }

  addTodo(newTodo) {
    this.setState({
      todos: this.state.todos.concat({title: newTodo.title, description: newTodo.description, id: this.state.nextID}),
      nextID: ++this.state.nextID
    });
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
      <Todo title={item.title} description={item.description} key={item.id} removeTodo={this.handleRemove.bind(this, idx)} />
    ));
    return (
      <div>
      <NewTodoForm addTodo={this.addTodo.bind(this)} />
      <ul className="todo-list">
        {todos}
      </ul>
      </div>
    )
  }
}

export default TodoList;