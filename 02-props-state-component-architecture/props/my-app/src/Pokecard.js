import React, { Component } from 'react';
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    // String templates, ES2015
    const altText = `${this.props.name}, type: ${this.props.type}`

    // const and object destructuring, ES2015
    const {name, image, type} = this.props;
    return (
      <div className="Pokecard">
        <h2>{name}</h2>
        <div><img src={image} alt={altText}/></div>
        <div><strong>Type: {type}</strong></div>
      </div>
    )
  }
}


export default Pokecard;