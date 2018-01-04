import React, { Component } from "react";

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			details: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.valur });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo({ ...this.state });
		this.setState({
			title: "",
			details: ""
		});
	}

	render() {
		return (
			<div>
				<h4>Add a todo!</h4>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">todo name</label>
					<input
						type="text"
						placeholder="What's your todo?"
						onChange={this.handleChange}
						name="title"
						value={this.state.title}
					/>
					<label htmlFor="details">details</label>
					<input
						type="text"
						placeholder="details please"
						onChange={this.handleChange}
						name="details"
						value={this.state.details}
					/>
					<input type="submit" value="todos list!" />
				</form>
			</div>
		);
	}
}
