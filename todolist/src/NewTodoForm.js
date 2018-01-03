import React, { Component } from "react";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			title: "",
			description: ""
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
				<input type="submit" value="add new task" />
			</form>
		);
	}
}

export default NewTodoForm;
