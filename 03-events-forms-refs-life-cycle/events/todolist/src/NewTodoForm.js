import React, { Component } from 'react';
import Todo from './Todo';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: "",
      description: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="todo-form">
        <div>
          <label>
            Title: &nbsp;
            <input
              onChange={this.handleChange}
              placeholder="Enter todo item."
              name="title"
              value={this.state.title}
            />
          </label>      
          <label>
            Description: &nbsp;
            <input
              onChange={this.handleChange}
              placeholder="Enter description."
              name="description"
              value={this.state.description}
            />
          </label>      
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm;