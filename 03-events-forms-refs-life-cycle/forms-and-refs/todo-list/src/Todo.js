import React, { Component } from 'react';
import "./Todo.css"

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      status: this.props.status,
      type: this.props.type
    }
  }  

  render() {

    var star, check, remove, button;

    if (this.props.type === "important") {
      star = 
        <button className="btn btn-primary-outline" onClick={this.props.handleUpdate}>
          <span className="glyphicon glyphicon-star" data-type="star"></span>
        </button>
    } else {
      star = 
        <button className="btn btn-primary-outline" onClick={this.props.handleUpdate}>
          <span className="glyphicon glyphicon-star-empty"data-type="star" ></span>
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
        <button className="pull-right btn btn-primary-outline" onClick={this.props.handleUpdate}>
          <span className={remove} data-type="delete"></span>
        </button>
    }

    return (
      <li className={this.props.status}>
        <button className="btn btn-primary-outline" onClick={this.props.handleUpdate}>
          <span className={check} data-type="complete"></span>
        </button>
        {star}
        <span>{this.props.content}</span>
        {button}
        <button className="btn btn-primary-outline" onClick={this.props.handleShowEdit}>
          <span className="glyphicon glyphicon-pencil" data-type="complete"></span>
        </button>
      </li>
    )
  }
}


export default Todo;
