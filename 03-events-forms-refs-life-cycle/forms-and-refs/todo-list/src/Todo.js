import React, { Component } from 'react';
import "./Todo.css"
import EditTodoForm from "./EditTodoForm";

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      status: this.props.status,
      type: this.props.type
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.tempContent);
    this.setState({
      content: this.state.tempContent,
      tempContent: ''
    })
  }

  editTodo(newContent, newStatus, newType) {
    this.setState({
      content: newContent,
      status: newStatus,
      type: newType 
    })
  }

  render() {

    var star, check, remove, button, editTodoForm;


    if (this.props.type === "important") {
      star = 
        <button className="btn btn-primary-outline" onClick={this.props.handleStar}>
          <span className="glyphicon glyphicon-star"></span>
        </button>
    } else {
      star = 
        <button className="btn btn-primary-outline" onClick={this.props.handleStar}>
          <span className="glyphicon glyphicon-star-empty"></span>
        </button>
    }

    if (this.props.status === "notDone") {
      check = "glyphicon glyphicon-unchecked";
      remove = null;
      button = null;
    } else {
      check = "glyphicon glyphicon-check";
      remove = "glyphicon glyphicon-remove";
      button = 
        <button className="pull-right btn btn-primary-outline" onClick={this.props.handleDelete}>
          <span className={remove}></span>
        </button>
    }

    editTodoForm = 
      <EditTodoForm
        handleEdit={this.editTodo.bind(this)}
      />

    return (
      <div>
        <li className={this.props.status}>
          <button className="btn btn-primary-outline" onClick={this.props.handleComplete}>
            <span className={check}></span>
          </button>
          {star}
          <span>{this.props.content}</span>
          {button}
        </li>
        {editTodoForm}
      </div>

    )
  }
}


export default Todo;