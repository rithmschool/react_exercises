import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
		this.setTitleFocus = this.setTitleFocus.bind(this);
		this.setDescriptionFocus = this.setDescriptionFocus.bind(this);
	}
	setTitleFocus() {
		this.titleElement.focus();
	}

	setDescriptionFocus() {
		this.descriptionElement.focus();
	}

	toggleEditTitle() {
		this.setState(
			{
				openEditTitle: !this.state.openEditTitle
			},
			() => {
				if (this.state.openEditDescription) return this.setTitleFocus();
			}
		);
	}

	toggleEditDescription() {
		this.setState(
			{
				openEditDescription: !this.state.openEditDescription
			},
			() => {
				if (this.state.openEditDescription)
					return this.setDescriptionFocus();
			}
		);
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
			<Link to={`/todos/${this.props.id}/edit`}>
				<input
					type="text"
					onChange={this.handleUpdateTitle}
					placeholder="enter new task"
					name="title"
					value={this.props.title}
					onBlur={this.toggleEditTitle}
					ref={el => (this.titleElement = el)}
					autoFocus
				/>
			</Link>
		) : (
			this.props.title
		);
		let description = this.state.openEditDescription ? (
			<Link to={`/todos/${this.props.id}/edit`}>
				<input
					type="text"
					onChange={this.handleUpdateDescription}
					placeholder="describe your task"
					name="description"
					value={this.props.description}
					onBlur={this.toggleEditDescription}
					ref={el => (this.descriptionElement = el)}
					autoFocus
				/>
			</Link>
		) : (
			this.props.description
		);
		//TODO: consolidate itemView and listView using conditional rendering
		const itemView = (
			<div>
				<h3 onDoubleClick={this.toggleEditTitle}>{title}</h3>
				<i>{taskStatus}</i>
				<p onDoubleClick={this.toggleEditDescription}>{description}</p>
				<button onClick={this.handleComplete}>{buttonText}</button>
				<Link to={`/todos/${this.props.id}`}>
					<button>details</button>
				</Link>
				<button onClick={this.props.handleDelete}>x</button>
			</div>
		);
		const listView = (
			<div>
				<h3>{title}</h3>
				<i>{taskStatus}</i>
				<Link to={`/todos/${this.props.id}`}>
					<button>details</button>
				</Link>
			</div>
		);

		if (this.props.match.params.id) {
			return <div>{itemView}</div>;
		} else {
			return <div>{listView}</div>;
		}
	}
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	complete: PropTypes.bool.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default Todo;
