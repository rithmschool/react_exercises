import React, { Component } from "react";
import AddGifForm from "./AddGifForm";
import Gif from "./Gif";
import "./GifList.css";
import axios from "axios";

class GifList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gifs: [],
			currentKey: 0
		};
	}

	componentDidMount() {
		axios
			.get(
				"http://api.giphy.com/v1/gifs/random?api_key=ae2pX99WYPVghJvzEbvTUDJXw9OI3hGJ"
			)
			.then(res => {
				const next = this.state.currentKey + 1;
				const gif = {
					key: next,
					txt: "Random Gif",
					img: res.data.data.id
				};
				const gifs = [gif, ...this.state.gifs];
				this.setState({ gifs, currentKey: next });
			})
			.catch(err => console.log(err));
	}

	//Would I need to use the (prevState,props)=> here to make sure duplicate keys don't get assigned
	// if someone clicks enter multiple times really fast before react can process it?
	handleAdd(txt) {
		let req = txt.trim().replace(/\s/g, "+");
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${req}&api_key=ae2pX99WYPVghJvzEbvTUDJXw9OI3hGJ&limit=1`
			)
			.then(res => {
				const next = this.state.currentKey + 1;
				const gif = {
					key: next,
					txt,
					img: res.data.data[0].id
				};
				const gifs = [gif, ...this.state.gifs];
				this.setState({ gifs, currentKey: next });
			})
			.catch(e => {
				console.log(e);
				alert("Try again!");
			});
	}

	handleDelete(key) {
		const gifs = [...this.state.gifs];
		const idx = gifs.findIndex(e => e.key === key);
		gifs.splice(idx, 1);
		this.setState({ gifs });
	}

	render() {
		const gifs = this.state.gifs.map(e => {
			return (
				<Gif
					key={e.key}
					txt={e.txt}
					img={e.img}
					fnDelete={this.handleDelete.bind(this, e.key)}
				/>
			);
		});

		return (
			<section>
				<AddGifForm fnAdd={this.handleAdd.bind(this)} />
				<div className="GifList">{gifs}</div>
			</section>
		);
	}
}

export default GifList;
