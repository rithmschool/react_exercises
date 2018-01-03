import React, { Component } from 'react';
import Pokecard from './Pokecard.js'


class Pokedex extends Component {
	render() {
		return (
			<div>
				<h1>Pokedex</h1>
					<Pokecard />
			</div>
		);
	}
}

export default Pokedex;

