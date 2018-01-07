import React, { Component } from 'react';

class GifForm extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<h4>This will the be the form</h4>
				<form>
					<input
						type='text'
						value={this.props.searchWord}
						placeholder='Search a term'
						onChange={this.props.setSearchWord}
					/>
					<button onClick={this.props.updateGif}>Find Gif</button>
					<button onClick={this.props.removeGifs}>Remove Gifs</button>
				</form>
			</div>
		)
	}
}

export default GifForm;