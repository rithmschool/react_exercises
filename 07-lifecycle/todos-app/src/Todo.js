import React, {Component} from 'react';
import './Todo.css';
import TodoForm from './TodoForm'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.showEditForm = this.showEditForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    this.props.toggleComplete('complete', !this.props.isComplete)
  }

  showEditForm() {
    this.props.toggleEditForm('editForm', !this.props.isShowingEditForm)
  }

  handleEdit(updatedTodo) {
    this.props.handleEdit(updatedTodo, this.props.id)
  }

  render() {
    let {isComplete, title, description, handleDelete, isShowingEditForm} = this.props
    let complete = isComplete ? "complete" : "";
    let buttonText = isComplete ? "incomplete" : "complete";

    let editForm = isShowingEditForm ? <TodoForm title={title} description={description} editTodo={this.handleEdit}/> : '';

    return (
      <div className={`Todo ${complete}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-wrapper">
          <button
            className="complete-button"
            onClick={this.handleComplete}
          >
            Mark as {buttonText}
          </button>
          <button
            className="remove-button"
            onClick={handleDelete}
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