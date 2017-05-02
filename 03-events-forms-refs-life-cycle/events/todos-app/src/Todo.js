import React, {Component} from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    this.setState({
      complete: !this.state.complete
    });
  }

  render() {
    let complete = this.state.complete ? "complete" : "";
    let buttonText = this.state.complete ? "incomplete" : "complete";

    return (
      <div className={`Todo ${complete}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <div className="button-wrapper">
          <button 
            className="complete-button" 
            onClick={this.handleComplete}
          >
            Mark as {buttonText}
          </button>
          <button 
            className="remove-button"
            onClick={this.props.handleDelete}
          >
            Delete this todo
          </button>
        </div>
      </div>
    );
  }
}