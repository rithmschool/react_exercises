import React, { Component } from 'react';
import Todo from './Todo'


class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: this.props.id,
			title: '',
			text: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.editFormSubmit = this.editFormSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	editFormSubmit(e) {
		e.preventDefault();
		

		this.props.addEdits(this.state);
		this.props.toggleEdit(this.state);
	}

	render() {
		return(
			<form onSubmit={this.editFormSubmit}>
				<label>Edit Todo</label>
				<input onChange={this.handleChange} name='title' placeholder={this.props.currentTodo.title} />
				<input onChange={this.handleChange} name='text' placeholder={this.props.currentTodo.text} />
				<input type='submit' value='Submit Edit' />
			</form>
		)
	}
}

export default EditForm;