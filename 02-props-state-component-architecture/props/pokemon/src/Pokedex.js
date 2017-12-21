import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    var pokeArr = this.props.pokemon.map((p, i) => (
      <Pokecard
        name={p.name}
        type={p.type}
        image={p.image}
        key={p.id}
        id={p.id}
      />
    ));
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        <div className="pokeinner">{pokeArr}</div>
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

export default Pokedex;
