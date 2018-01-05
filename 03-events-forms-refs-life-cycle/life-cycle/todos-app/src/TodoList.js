import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      latestId: 0
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    localStorage.setItem("latestId", this.state.latestId);
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || this.state.todos;
    const latestId = +JSON.parse(localStorage.getItem("latestId")) || this.state.latestId;
    this.setState({ todos, latestId });
  }

  handleAdd(newTodo) {
    const latestId = this.state.latestId + 1;
    const todos = [{...newTodo, id: latestId}, ...this.state.todos];
    this.setState({ todos, latestId }, this.updateLocalStorage);
  }

  handleEdit(id, updatedTodo) {
    const todos = this.state.todos.map(todo => (
      id === todo.id
      ? { ...todo, ...updatedTodo, isShowingEditForm: false}
      : todo
    ));
    this.setState({ todos }, this.updateLocalStorage);
  }

  handleDelete(id) {
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({ todos }, this.updateLocalStorage);
  }

  toggle(id, key) {
    const todos = this.state.todos.map(todo => (
      id === todo.id
      ? { ...todo, [key]: !todo[key] }
      : todo
    ));
    this.setState({ todos }, this.updateLocalStorage);
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        title={todo.title}
        description={todo.description}
        handleDelete={this.handleDelete.bind(this, todo.id)}
        handleEdit={this.handleEdit.bind(this, todo.id)}
        toggleComplete={this.toggle.bind(this, todo.id, "isComplete")}
        isComplete={todo.isComplete}
        toggleEditForm={this.toggle.bind(this, todo.id, "isShowingEditForm")}
        isShowingEditForm={todo.isShowingEditForm}
      />
    ));

    return (
      <div>
        <TodoForm handleSubmit={this.handleAdd} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
