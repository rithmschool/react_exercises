import React, { Component } from 'react';
import './NewTodoForm.css';

class EditTodoForm extends Component {
  
  constructor(props) {
    super(props)
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.state = {
      content: '',
      tempContent: '',
      status: '',
      tempStatus: '',
      type: '',
      tempType: ''
    }
  }

  handleEditChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.props.handleEdit(this.state.tempContent, this.state.tempStatus, this.state.tempType);
    this.setState({
      content: this.state.tempContent,
      tempContent: '',
      status: this.state.tempStatus,
      tempStatus: '',
      type: this.state.tempType,
      tempType: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleEditSubmit} id={this.props.id}>
        
        <input
          name="tempContent"
          type="text"
          onChange={this.handleEditChange}
          placeholder="Buy milk"
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