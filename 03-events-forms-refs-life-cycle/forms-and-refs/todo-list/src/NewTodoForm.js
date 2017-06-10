import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      content: '',
      tempContent: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.tempContent);
    this.setState({
      content: this.state.tempContent,
      tempContent: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        
        <input
          name="tempContent"
          type="text"
          onChange={this.handleChange}
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