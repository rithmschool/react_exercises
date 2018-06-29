import React, { Component } from 'react';
import Pokecard from './Pokecard.js'
import './Pokedex.css'


class Pokedex extends Component {
	render() {
		const pokemonList = this.props.pokemon.map(poke => {
			return <Pokecard key={poke.id}
				name={poke.name}
				image={poke.image}
				type={poke.type}
			/>
		});
		return (
			<div className='body'>
				<h1 style={{color: 'gray'}}>Pokedex</h1>
				<div>
					{pokemonList}
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

export default Pokedex;

