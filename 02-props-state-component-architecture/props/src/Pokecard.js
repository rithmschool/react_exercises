import React, { Component } from 'react';
import './Pokecard.css';

export default class Pokecard extends Component {
  render() {
    // String templates, ES2015 Feature
    const altText = `${this.props.name}, type: ${this.props.type}`;

    // Const and object Destructuring, ES2015
    const {name, image, type} = this.props;
    return (
      <div className="card">
        <h2 className="card-name">{name}</h2>
        <img src={image} alt={altText}/>
        <h4 className="type"><strong>Type:</strong> {type}</h4>
      </div>
    );
  }
}
