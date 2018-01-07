import React, { Component } from 'react';
import axios from 'axios';
import GifForm from './GifForm'


class GifList extends  Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			searchWord: ''
		};

		this.setSearchWord = this.setSearchWord.bind(this);
		this.updateGif = this.updateGif.bind(this);
		this.removeGifs = this.removeGifs.bind(this);

	}

	setSearchWord(event) {
		this.setState({searchWord: event.target.value});
	}

	removeGifs(event) {
		this.setState({gifs: []})
	}


	componentDidMount() {
	    let randomTerms = ["happy", "funny", "baby", "silly", "party", "dance", "sing", "music", "jump", "run"];
	    fetch(`https://api.giphy.com/v1/gifs/search?q=${randomTerms[Math.floor(Math.random()*randomTerms.length)]}&api_key=dc6zaTOxFJmzC`)
	      .then(r => r.json())
	      .then(r => {
	      	console.log(r)
	      	const newGifs = r.data.map(gif => ({
					id: gif.id,
					url: gif.embed_url
				}));
				this.setState({
					gifs: newGifs
				});
	      })
  	}

	updateGif(e) {
		e.preventDefault();
		axios
			.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchWord}&api_key=dc6zaTOxFJmzC`, {
				headers: { Accept: 'application/json' }
			})
			.then(response => {
				const newGifs = response.data.data.map(gif => ({
					id: gif.id,
					url: gif.embed_url
				}));
				this.setState({
					gifs: [newGifs[Math.floor(Math.random() * newGifs.length)], ...this.state.gifs], 
					searchWord: ''
				});
			});
	}


	render() {
		const style = {
			display: 'inline-block'
		}
		const gifs = this.state.gifs.map(gif => {
			return (
				<div style={style} key={gif.id}>
					<iframe src={ gif.url } />
				</div>
			)
		})
		return (
			<section>
				<GifForm 
					searchWord={this.state.searchWord}
					setSearchWord={this.setSearchWord}
					updateGif={this.updateGif}
				/>
				<div> 
					{ gifs }
				</div>
			</section>
		)
	}
}



export default GifList;