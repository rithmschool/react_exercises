import React, { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openEditTitle: false,
			openEditDescription: false
		};
		this.toggleEditTitle = this.toggleEditTitle.bind(this);
		this.toggleEditDescription = this.toggleEditDescription.bind(this);
		this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
		this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	//TODO: set focus to input when toggled open using ref

	toggleEditTitle() {
		this.setState({
			openEditTitle: !this.state.openEditTitle
		});
	}
	toggleEditDescription() {
		this.setState({
			openEditDescription: !this.state.openEditDescription
		});
	}

	handleUpdateTitle(e) {
		let newTitle = e.target.value;
		this.props.handleEdit({ title: newTitle });
	}

	handleUpdateDescription(e) {
		let newDescription = e.target.value;
		this.props.handleEdit({ description: newDescription });
	}

	handleComplete(e) {
		e.preventDefault();
		this.props.toggleComplete();
	}
	render() {
		let buttonText = this.props.complete
			? "mark as not done"
			: "mark as done";
		let taskStatus = this.props.complete ? "done!!!" : "";
		let title = this.state.openEditTitle ? (
			<input
				type="text"
				onChange={this.handleUpdateTitle}
				placeholder="enter new task"
				name="title"
				value={this.props.title}
			/>
		) : (
			this.props.title
		);
		let description = this.state.openEditDescription ? (
			<input
				type="text"
				onChange={this.handleUpdateDescription}
				placeholder="describe your task"
				name="description"
				value={this.props.description}
			/>
		) : (
			this.props.description
		);
		return (
			<div>
				{/*TODO: add keyDown listener for enter key*/}
				<h3
					onDoubleClick={this.toggleEditTitle}
					onBlur={this.toggleEditTitle}
				>
					{title}
				</h3>
				<i>{taskStatus}</i>
				<p
					onDoubleClick={this.toggleEditDescription}
					onBlur={this.toggleEditDescription}
				>
					{description}
				</p>
				<button onClick={this.handleComplete}>{buttonText}</button>
				<button onClick={this.props.handleDelete}>x</button>
			</div>
		);
	}
}

export default Todo;
