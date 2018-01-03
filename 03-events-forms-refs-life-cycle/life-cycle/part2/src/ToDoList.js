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
          finished: false,
          edit: false
        },
        {
          key: 2,
          name: "Sleep",
          finished: false,
          edit: false
        },
        {
          key: 3,
          name: "Be Happy",
          finished: true,
          edit: false
        }
      ]
    };
  }

  handleDeleteClick(key, e) {
    e.preventDefault();
    let newToDos = [...this.state.toDos];
    let findIdx = newToDos.findIndex(e => e.key === key);
    newToDos.splice(findIdx, 1);
    this.setState({ toDos: newToDos });
  }

  handleCompleteClick(key, e) {
    e.preventDefault();
    const newToDos = this.state.toDos.map(toDo => {
      if (toDo.key === key) {
        toDo.finished = !toDo.finished;
        return toDo;
      }
      return toDo;
    });
    this.setState({
      todos: newToDos
    });
  }

  handleEditClick(key, e) {
    e.preventDefault();
    const newToDos = this.state.toDos.map(toDo => {
      if (toDo.key === key) {
        toDo.edit = true;
        return toDo;
      }
      return toDo;
    });
    this.setState({
      todos: newToDos
    });
  }

  handleSubmit(txt) {
    const keyNum = this.state.keyNum + 1;
    const newToDo = {
      key: keyNum,
      name: txt,
      finished: false,
      edit: false
    };
    let newToDos = [...this.state.toDos];
    newToDos.push(newToDo);
    this.setState({
      keyNum,
      toDos: newToDos
    });
  }

  handleEdit(key, txt) {
    const newToDos = this.state.toDos.map(toDo => {
      if (toDo.key === key) {
        toDo.name = txt;
        toDo.edit = false;
        return toDo;
      }
      return toDo;
    });
    this.setState({
      toDos: newToDos
    });
  }

  render() {
    const toDoList = this.state.toDos.map(e => {
      return (
        <ToDo
          key={e.key}
          name={e.name}
          finished={e.finished}
          edit={e.edit}
          deleteButton={this.handleDeleteClick.bind(this, e.key)}
          editButton={this.handleEditClick.bind(this, e.key)}
          completeButton={this.handleCompleteClick.bind(this, e.key)}
          fnEdit={this.handleEdit.bind(this, e.key)}
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
