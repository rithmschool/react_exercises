import React, {Component} from 'react';
import './Todo.css';
import TodoForm from './TodoForm'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.isComplete === false ? false : true,
      editFormShowing: false
    };
    this.showEditForm = this.showEditForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isComplete === false){
      this.setState({
        complete: nextProps.isComplete
      })
    }
  }

  handleComplete() {
    this.setState({
        complete: !this.state.complete
    }, () => {
      this.props.toggleComplete(this.state.complete)
    });
  }

  showEditForm() {
    this.setState({
      editFormShowing: !this.state.editFormShowing
    });
  }

  handleEdit(updatedTodo) {
    this.props.handleEdit(updatedTodo, this.props.id)
    this.setState({
      editFormShowing: !this.state.editFormShowing
    });
  }

  render() {
    let complete = this.state.complete ? "complete" : "";
    let buttonText = this.state.complete ? "incomplete" : "complete";

    let editForm = this.state.editFormShowing ? <TodoForm title={this.props.title} description={this.props.description} editTodo={this.handleEdit}/> : '';

    return (
      <div className={`Todo ${complete}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <div className="button-wrapper">
          <button
            className="complete-button"
            onClick={this.handleComplete.bind(this)}
          >
            Mark as {buttonText}
          </button>
          <button
            className="remove-button"
            onClick={this.props.handleDelete}
          >
            Delete this todo
          </button>
          <button
            className="edit-button"
            onClick={this.showEditForm}
          >
            Edit this todo
          </button>
          {editForm}
        </div>
      </div>
    );
  }
}