import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "Finish Homework",
          finished: false
        },
        {
          id: 2,
          name: "Sleep",
          finished: false
        }
      ]
    };
  }
  render() {
    const toDoList = this.state.todos.map(e => {
      return <ToDo id={e.id} name={e.name} finished={e.finished} />;
    });
    return <div>{toDoList}</div>;
  }
}

export default ToDoList;
