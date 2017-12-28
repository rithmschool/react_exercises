import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard'
import { Grid, Col, Row } from 'react-bootstrap';

class Pokedex extends Component {
  render() {
    const pokemon = this.props.pokemon.map(pokemon => {
      return (
        <Col s={6} md={4}>
          <Pokecard
            name = {pokemon.name}
            type = {pokemon.type}
            image = {pokemon.image}
          />
        </Col>
      )
    })
    return (
      <div className="App">
        <Grid>
          <Row className='show-grid'>
            {pokemon}
          </Row>
        </Grid>
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
}

export default Pokedex;
