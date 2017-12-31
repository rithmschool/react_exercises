import React, { Component} from 'react';

class AddGifForm extends Component{

	render(){
		return (
			<div className='form'>
				<form onSubmit={this.props.addGif}>
					<input type='text' value={this.props.value} onChange={this.props.updateText}/>
					<button className='add' type="submit">Search Giphy!</button>
				</form>
				<button className='remove' onClick={this.props.clearGifs}>Clear Gifs</button>
			</div>	
			)
	}
}

export default AddGifForm;