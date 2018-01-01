import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
export default class Pokedex extends Component {
	constructor(props) {
		super(props);
	}

  render() {
  	let pokeCards = this.props.pokemon.map(pokemon => {
  		return (
  			<Pokecard 
  				key={pokemon.id}
  				name={pokemon.name}
  				image={pokemon.image}
  				type={pokemon.type}
  			/>
  			);
  	});

  	return (
  		<div className="app">
        <h1 className="app-title">Pokedex</h1>
        <div className="cards">
        	{pokeCards}
        </div>
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
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ]
};