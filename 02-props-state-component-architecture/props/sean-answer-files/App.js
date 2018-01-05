import React, { Component } from 'react';
import './App.css';
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    const pokemon = this.props.pokemon.map(p => {
      return (
        <Pokecard 
          key={p.id}
          name={p.name}
          image={p.image}
          type={p.type}
        />
      )
    })
    return (
      <div className="App">
        <h1 className="App-title">Pokedex</h1>
        {pokemon}
      </div>
    );
  }
}

App.defaultProps = {
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
}

export default App;

