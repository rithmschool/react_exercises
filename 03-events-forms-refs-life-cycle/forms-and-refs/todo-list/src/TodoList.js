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

  updateItem(key, e) {
    let type = e.target.getAttribute('data-type');

    let newTodos = this.state.todos.slice();
    if (type === "complete") {
      if (this.state.todos[key].status === "notDone") {
        newTodos[key].status = "done";
      } else {
        newTodos[key].status = "notDone";
      }
    } else if (type === "delete") {
      if (this.state.todos[key].status === "done") {
        newTodos.splice(key, 1);
      }
    } else if (type === "star") {
      if (this.state.todos[key].type === null) {
        newTodos[key].type = "important";
      } else {
        newTodos[key].type = null;
      }
    }
    this.setState( {todos: newTodos} );
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
    var newKey = 0;
    if (curTodos.length >0) {
      newKey = curTodos[curTodos.length - 1].key + 1;
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
            key={i}
          />
        )
      } else {
        return (
          <Todo 
            key={i} 
            content={item.content}
            status={item.status}
            type={item.type}
            handleUpdate={this.updateItem.bind(this, i)}
            handleShowEdit={this.showEditForm.bind(this, i)}
          />
        )
      }
    })

    return (
      <div>
        <NewTodoForm handleAdd={this.addTodo.bind(this)} key={this.props.id}/>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}


export default TodoList;
