import React, { Component } from "react";

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		this.props.handleUpdate(this.state);
	}

	render() {
		return (
			<form onSubmit={this.props.handleUpdate}>
				<input
					type="text"
					onChange={this.handleChange}
					placeholder="enter new task"
					name="title"
					value={this.state.title}
				/>
				<input
					type="text"
					onChange={this.handleChange}
					placeholder="describe your task"
					name="description"
					value={this.state.description}
				/>
				<input type="submit" value="edit task" />
			</form>
		);
	}
}

export default EditTodoForm;
