import React, { Component } from 'react';

class NewTodoForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '',
			description: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
  	}

	handleSubmit(e) {
		e.preventDefault();
	    this.props.addTodo(this.state);
	}
	
	render() {
    return (
      <div>
        <h4>Add a todo!</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">Todo: </label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="what do ya need tadah?"
            onChange={this.handleChange}
            value={this.state.id}
          />
          <input type="submit" value="Add your todo!" />
        </form>
      </div>
    )
  }
}

export default NewTodoForm;
