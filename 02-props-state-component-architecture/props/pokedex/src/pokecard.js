import React, { Component } from 'react';
import './App.css';

export default class Pokecard extends Component {
  render() {
    return(
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} />
        <h3>Type: {this.props.type}</h3>
      </div>
      );
  }
}