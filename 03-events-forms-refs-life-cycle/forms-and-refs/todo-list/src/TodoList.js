import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  completeItem(key) {
    if (this.state.todos[key].status === "notDone") {
      let newTodos = this.state.todos.slice();
      newTodos[key].status = "done";
      this.setState( {todos:newTodos} );
    } else {
      let newTodos = this.state.todos.slice();
      newTodos[key].status = "notDone";
      this.setState( {todos:newTodos} );
    }
  }

  deleteItem(key) {
    if (this.state.todos[key].status === "done"){
      let newTodos = this.state.todos.slice();
      newTodos.splice(key, 1);
      this.setState( {todos:newTodos} );
    }
  }

  starItem(key) {
    if (this.state.todos[key].type === null) {
      let newTodos = this.state.todos.slice();
      newTodos[key].type = "important";
      this.setState( {todos:newTodos} );
    } else {
      let newTodos = this.state.todos.slice();
      newTodos[key].type = null;
      this.setState( {todos:newTodos} );
    }
  }

  addTodo(newTodo) {
    let curTodos = this.state.todos;
    curTodos.push({
      content: newTodo,
      status: "notDone",
      type: null
    })
    this.setState({
      todos: curTodos 
    })
  }

  render() {
    
    const todos = this.state.todos.map((item, i) => (
      <Todo 
        key={i} 
        content={item.content}
        status={item.status}
        type={item.type}
        handleComplete={this.completeItem.bind(this, i)}
        handleDelete={this.deleteItem.bind(this, i)}
        handleStar={this.starItem.bind(this, i)}
      />
    ))

    return (
      <div>
        <NewTodoForm
          handleAdd={this.addTodo.bind(this)}
        />
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}


export default TodoList;
