import React, { Component } from "react";

class EditToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: props.name
		};
	}
	handleChange(e) {
		e.preventDefault();
		this.setState({ currentText: e.target.value.slice(0, 30) });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.fnEdit(this.state.currentText);
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label htmlFor="edit">Edit:</label>
				<input
					type="text"
					name="toDo"
					id="edit"
					placeholder="What do you need to do?"
					onChange={this.handleChange.bind(this)}
					value={this.state.currentText}
				/>
				<button type="submit">Done Editing</button>
			</form>
		);
	}
}

export default EditToDoForm;
