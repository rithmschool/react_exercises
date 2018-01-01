import React, { Component } from 'react';
import './Pokecard.css';
export default class Pokecard extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="poke-card">
	      <h2 className="name">{this.props.name}</h2>
	      <img className="avatar" src={this.props.image} alt={"Image of " + this.props.name}/>
	      <p className="type">Type: {this.props.type}</p>
      </div> 
    );
  }	
};