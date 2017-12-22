import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: "Finish Homework",
          finished: false
        },
        {
          name: "Sleep",
          finished: false
        },
        {
          name: "Be Happy",
          finished: true
        }
      ]
    };
  }
  handleDeleteClick(idx) {
    let newTodos = [...this.state.todos];
    newTodos.splice(idx, 1);
    this.setState({ todos: newTodos });
  }
  handleCompleteClick(idx) {
    let newTodos = [...this.state.todos];
    newTodos[idx].finished = !newTodos[idx].finished;
    this.setState({ todos: newTodos });
  }
  render() {
    const toDoList = this.state.todos.map((e, idx) => {
      return (
        <ToDo
          key={idx}
          name={e.name}
          finished={e.finished}
          deleteButton={this.handleDeleteClick.bind(this, idx)}
          completeButton={this.handleCompleteClick.bind(this, idx)}
        />
      );
    });
    return <div>{toDoList}</div>;
  }
}

export default ToDoList;
