import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
	render() {
		const pokemon = this.props.pokemon.map(poke => {
			return (
				<Pokecard
					key={poke.id}
					name={poke.name}
					type={poke.type}
					image={poke.image}
				/>
			);
		});
		return (
			<div className="container">
				<h1>Pokedex</h1>
				<div className="pokemon-container">{pokemon}</div>
			</div>
		);
	}
}

Pokedex.defaultProps = {
	pokemon: [
		{
			id: 1,
			name: "Charmander",
			type: "fire",
			image:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
		},
		{
			id: 2,
			name: "Squirtle",
			type: "water",
			image:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
		},
		{
			id: 3,
			name: "Butterfree",
			type: "flying",
			image:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
		},
		{
			id: 4,
			name: "Rattata",
			type: "normal",
			image:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
		},
		{
			id: 5,
			name: "Metapod",
			type: "bug",
			image:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
		}
	]
};
