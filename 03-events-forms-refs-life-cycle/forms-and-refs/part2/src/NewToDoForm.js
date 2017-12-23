import React, { Component } from "react";

class NewToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: ""
		};
	}
	handleChange(e) {
		e.preventDefault();
		this.setState({ currentText: e.target.value.slice(0, 30) });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.fnSubmit(this.state.currentText);
		this.setState({ currentText: "" });
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="toDo">To do:</label>
				<input
					type="text"
					name="toDo"
					id="toDo"
					placeholder="What do you need to do?"
					onChange={this.handleChange.bind(this)}
					value={this.state.currentText}
				/>
				<button onClick={this.handleSubmit.bind(this)}>
					Add to-do item!
				</button>
			</form>
		);
	}
}

export default NewToDoForm;
//OR Line 31 <button onClick={e => this.prop.fnSubmit(this.state.currentText, e)}
// handle e.preventDefault() in parent
