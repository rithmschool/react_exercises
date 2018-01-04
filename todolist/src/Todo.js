import React, { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			complete: false,
			isSelected: false
		};
		this.toggleComplete = this.toggleComplete.bind(this);
	}
	toggleTitleEdit() {
		this.setState({
			editText: this.props.todo.title,
			isSelected: true
		});
	}

	toggleDescriptionEdit() {
		this.setState({
			editText: this.props.todo.description,
			isSelected: true
		});
	}
	toggleComplete() {
		this.setState({
			complete: !this.state.complete
		});
	}
	render() {
		let buttonText = this.state.complete ? "done!!!" : "not done";
		let taskStatus = this.state.complete ? "done!!!" : "";
		let title = this.state.isSelected ? (
			<input
				type="text"
				onChange={this.handleChange}
				placeholder="enter new task"
				name="title"
				value={this.state.title.value}
			/>
		) : (
			this.props.title
		);
		let description = this.state.isSelected ? (
			<input
				type="text"
				onChange={this.handleChange}
				placeholder="describe your task"
				name="description"
				value={this.state.description.value}
			/>
		) : (
			this.props.description
		);
		return (
			<div>
				<h3 onDoubleClick={this.toggleTitleEdit}>{title}</h3>
				<i>{taskStatus}</i>
				<p onDoubleClick={this.toggleDescriptionEdit}>{description}</p>
				<button onClick={this.toggleComplete}>{buttonText}</button>
				<button onClick={this.props.handleDelete}>x</button>
			</div>
		);
	}
}

export default Todo;
