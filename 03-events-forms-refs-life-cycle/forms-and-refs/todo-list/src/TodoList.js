import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from "./EditTodoForm";
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

  showEditForm(key) {
    let curTodos = this.state.todos;
    curTodos[key].edit = true;
    this.setState({
      todos: curTodos 
    })
  }

  addTodo(newTodo) {
    let curTodos = this.state.todos;
    if (curTodos.length === 0) {
      var newKey = 0;
    } else {
      var newKey = curTodos[curTodos.length - 1].key + 1;
    }
    curTodos.push({
      key: newKey,
      content: newTodo,
      status: "notDone",
      type: null,
      edit: false
    })
    this.setState({
      todos: curTodos 
    })
  }

  editTodo(newContent, key) {
    let curTodos = this.state.todos;
    curTodos[key].content = newContent;
    curTodos[key].edit = false;
    this.setState({ todos:curTodos })
  }

  render() {
    
    const todos = this.state.todos.map((item, i) => {
      // if editing 'item', add EditTodoForm
      if(item.edit === true) {
        return ( 
          <EditTodoForm 
            handleEdit={this.editTodo.bind(this)}
            id={i}
            content={item.content}
          />
        )
      } else {
        return (
          <Todo 
            key={i} 
            content={item.content}
            status={item.status}
            type={item.type}
            handleComplete={this.completeItem.bind(this, i)}
            handleDelete={this.deleteItem.bind(this, i)}
            handleStar={this.starItem.bind(this, i)}
            handleShowEdit={this.showEditForm.bind(this, i)}
          />
        )
      }
    })

    return (
      <div>
        <NewTodoForm handleAdd={this.addTodo.bind(this)}/>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}


export default TodoList;
