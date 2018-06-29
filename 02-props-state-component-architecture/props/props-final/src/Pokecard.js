import React, { Component } from 'react';
import './Pokecard.css'


class Pokecard extends Component {
	render() {
		const {name, image, type} = this.props;
		return (
			<div className='card'>
				<h2 className='name'>{name}</h2>
				<img src={image} />
				<strong>Type: {type}</strong>
			</div>
		);
	}
}


export default Pokecard;