import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
    this.handleDone = this.handleDone.bind(this);
  }

  handleDone() {
    this.setState({
      complete: !this.state.complete
    });
  }

  render() {
    var style = this.state.complete ? {textDecoration: 'line-through', color: 'gray', fontStyle: 'italic'} : {}
    let completeText = this.state.complete ? "Done. Click to undo" : "Mark as done";
    return (
      <li className="todo-item">
        <span className="todo-title" style={style}>{this.props.title}</span>: <span style={style}>{this.props.description}</span>&nbsp;<button onClick={this.handleDone}>{completeText}</button>&nbsp;<button onClick={this.props.removeTodo}>Remove</button>
      </li>
      )
  }
}

export default Todo;