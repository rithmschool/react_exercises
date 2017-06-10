import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  
  constructor(props) {
    super(props)
    this.handleNewChange = this.handleNewChange.bind(this);
    this.handleNewSubmit = this.handleNewSubmit.bind(this);
    this.state = {
      content: '',
      tempContent: ''
    }
  }

  handleNewChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleNewSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.tempContent);
    this.setState({
      content: this.state.tempContent,
      tempContent: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleNewSubmit} id={this.props.id}>
        
        <input
          name="tempContent"
          type="text"
          onChange={this.handleNewChange}
          placeholder="Buy milk"
          value={this.state.tempContent}
        />
        <span className="space">&nbsp;</span>
        <button type="submit">
          <span className="glyphicon glyphicon-plus" ></span>
        </button>
      </form>
    )
  }
}


export default NewTodoForm;