import React, { Component } from "react";

export default class DivForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: "",
			height: "",
			backgroundColor: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addDiv(this.state);
		this.width.focus();
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>
						Width:
						<input
							type="number"
							value={this.handleChange}
							name="width"
						/>
					</label>
				</div>
				<div>
					<label>
						Height:
						<input
							type="number"
							value={this.state.height}
							onChange={this.handleChange}
							name="height"
						/>
					</label>
				</div>
				<div>
					<label>
						Background Color:
						<input
							type="color"
							value={this.state.backgroundColor}
							onChange={this.handleChange}
							name="backgroundColor"
						/>
					</label>
				</div>
				<input type="submit" value="Add a div" />
			</form>
		);
	}
}
