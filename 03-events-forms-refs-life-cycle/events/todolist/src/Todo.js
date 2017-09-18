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
      <div>
        <h4 style={style}>{this.props.title}</h4>
        <p style={style}>{this.props.description}</p>
        <p><button onClick={this.handleDone}>{completeText}</button></p>
        <p><button onClick={this.props.removeTodo}>Remove</button></p>
      </div>
      )
  }
}

export default Todo;