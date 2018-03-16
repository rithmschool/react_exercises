import React, { Component } from "react";

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || "",
			details: props.details || ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(this.state);
		this.setState({
			title: "",
			details: ""
		});
	}

	render() {
		let formTitle = this.props.edit ? "Edit a todo" : "Add a todo";
		let { title, details } = this.state;
		return (
			<div>
				<h3>{formTitle}</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">title</label>
					<input
						type="text"
						placeholder="What's your todo?"
						onChange={this.handleChange}
						name="title"
						value={title}
					/>
					<label htmlFor="details">details</label>
					<input
						type="text"
						placeholder="details please"
						onChange={this.handleChange}
						name="details"
						value={details}
					/>
					<input type="submit" value="todos list!" />
				</form>
			</div>
		);
	}
}
