import React, { Component } from "react";

class AddGifForm extends Component {
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
		this.props.fnAdd(this.state.currentText);
		this.setState({ currentText: "" });
	}
	render() {
		return (
			<form className="GifForm" onSubmit={this.handleSubmit.bind(this)}>
				<label htmlFor="gif">Search for:</label>
				<input
					type="text"
					name="gif"
					id="gif"
					placeholder="Search for Gif"
					onChange={this.handleChange.bind(this)}
					value={this.state.currentText}
				/>
				<button type="submit">Add Gif</button>
			</form>
		);
	}
}

export default AddGifForm;
