import React, { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { complete: false };
		this.handleComplete = this.handleComplete.bind(this);
	}
	handleComplete() {
		this.setState({
			complete: !this.state.complete
		});
	}

	render() {
		let buttonText = this.state.complete ? "done!!!" : "not done";
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				<button onClick={this.handleComplete}>{buttonText}</button>
				<button onClick={this.props.handleDelete}>x</button>
			</div>
		);
	}
}

export default Todo;
