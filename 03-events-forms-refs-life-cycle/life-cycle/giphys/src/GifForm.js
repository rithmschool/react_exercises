import React, { Component } from "react";

class GifForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};
		this.getGifs = this.getGifs.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.resetGifs = this.resetGifs.bind(this);
	}
	//random load
	componentDidMount() {
		let randomTerms = [
			"happy",
			"funny",
			"baby",
			"silly",
			"party",
			"dance",
			"sing",
			"music",
			"jump",
			"run"
		];
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${
				randomTerms[Math.floor(Math.random() * randomTerms.length)]
			}&api_key=dc6zaTOxFJmzC`
		)
			.then(r => r.json())
			.then(r => {
				this.props.handleSubmit(r);
			});
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	getGifs(e) {
		e.preventDefault();
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${
				this.state.searchTerm
			}&api_key=dc6zaTOxFJmzC`
		)
			.then(r => r.json())
			.then(r => {
				this.props.handleSubmit(r);
			});
		this.setState({
			searchTerm: ""
		});
	}
	resetGifs() {
		this.props.clearGifs();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.getGifs}>
					<input
						type="text"
						value={this.state.searchTerm}
						name="searchTerm"
						onChange={this.handleChange}
					/>
					<input type="submit" value="search" />
				</form>
				<input
					type="submit"
					value="clear images"
					onClick={this.resetGifs}
				/>
			</div>
		);
	}
}

export default GifForm;
