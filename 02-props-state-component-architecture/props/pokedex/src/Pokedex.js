import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="" />
        <h4>Type: {this.props.type}</h4>
      </div>
    );
  }
}

export class Pokedex extends Component {
  render() {
    let cards = this.props.pokemon.map(e => (
      <Card name={e.name} type={e.type} image={e.image} />
    ));
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="CardContainer">{cards}</div>
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
