import React, { Component } from 'react';
import Pokecard from './Pokecard.js'
import './Pokedex.css'


class Pokedex extends Component {
	render() {
		return (
			<div>
				<h1 style={{color: 'gray'}}>Pokedex</h1>
					<Pokecard />
			</div>
		);
	}
}

export default Pokedex;

