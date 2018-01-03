import React, { Component } from 'react';
import './Pokecard.css'

class Pokecard extends Component {
	render() {
		const pokemonList = this.props.pokemon.map(poke => {
			return (
				<div className='card'>
					<h2 className='name'>{poke.name}</h2>
					<img src={poke.image} alt={poke.id} />
					<strong>Type: {poke.type} </strong>
				</div>
			);
		});
		return (
			<div>
				<ul>{pokemonList}</ul>
			</div>
		);
	}
}
Pokecard.defaultProps = {
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

export default Pokecard;