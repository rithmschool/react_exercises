import React, {Component} from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Todo`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
