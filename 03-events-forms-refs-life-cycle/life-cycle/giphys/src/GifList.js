import React, { Component } from "react";
import GifForm from "./GifForm";
import "./App.css";

class GifList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gifs: []
		};
		this.updateList = this.updateList.bind(this);
		this.clearList = this.clearList.bind(this);
	}
	updateList(response) {
		this.setState({
			gifs: this.state.gifs.concat(
				response.data[Math.floor(Math.random() * response.data.length)]
			)
		});
	}
	clearList() {
		this.setState({
			gifs: []
		});
	}

	render() {
		let gifs = this.state.gifs.map((val, i) => {
			if (!val) {
				return [];
			} else
				return (
					<div key={i}>
						<iframe src={val.embed_url} />
					</div>
				);
		});
		return (
			<div className="App">
				<h1>Giphy Party</h1>
				<GifForm
					handleSubmit={this.updateList}
					clearGifs={this.clearList}
				/>
				{gifs}
			</div>
		);
	}
}

export default GifList;
