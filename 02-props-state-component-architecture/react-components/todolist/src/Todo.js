import "./Todo.css";
import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return(
      <div className={`Todo`}>
        <h3>{this.props.itemName}</h3>
        <p> {this.props.description}</p>
      </div>
    );
  }
}

export default Todo;
