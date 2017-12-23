import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyNum: 3,
      toDos: [
        {
          key: 1,
          name: "Finish Homework",
          finished: false
        },
        {
          key: 2,
          name: "Sleep",
          finished: false
        },
        {
          key: 3,
          name: "Be Happy",
          finished: true
        }
      ],
      currentText: ""
    };
  }
  handleDeleteClick(idx, e) {
    e.preventDefault();
    let newToDos = [...this.state.toDos];
    newToDos.splice(idx, 1);
    this.setState({ toDos: newToDos });
  }
  handleCompleteClick(idx, e) {
    e.preventDefault();
    let newToDos = [...this.state.toDos];
    newToDos[idx].finished = !newToDos[idx].finished;
    this.setState({ toDos: newToDos });
  }

  handleSubmit(txt) {
    const newToDo = {
      key: this.state.keyNum + 1,
      name: txt,
      finished: false
    };
    let newToDos = [...this.state.toDos];
    newToDos.push(newToDo);
    this.setState({
      keyNum: this.state.keyNum + 1,
      toDos: newToDos
    });
  }
  render() {
    const toDoList = this.state.toDos.map((e, idx) => {
      return (
        <ToDo
          key={e.key}
          name={e.name}
          finished={e.finished}
          deleteButton={this.handleDeleteClick.bind(this, idx)}
          completeButton={this.handleCompleteClick.bind(this, idx)}
        />
      );
    });
    return (
      <main>
        {toDoList}
        <NewToDoForm fnSubmit={this.handleSubmit.bind(this)} />
      </main>
    );
  }
}

export default ToDoList;
