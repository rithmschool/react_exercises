import React, { Component } from 'react';
import './NewTodoForm.css';

class EditTodoForm extends Component {
  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      content: '',
      tempContent: this.props.content,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleEdit(this.state.tempContent, this.props.id);
    this.setState({
      content: this.state.tempContent,
      tempContent: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        <input
          name="tempContent"
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.content}
          value={this.state.tempContent}
        />
        <span className="space">&nbsp;</span>
        <button type="submit">
          <span className="glyphicon glyphicon-save" ></span>
        </button>
      </form>
    )
  }
}


export default EditTodoForm;