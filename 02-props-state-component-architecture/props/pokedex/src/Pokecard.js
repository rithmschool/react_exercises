import React, { Component } from "react";
//import "./Pokecard.css";

export default class Pokecard extends Component {
	render() {
		const altText = `${this.props.name}, type: ${this.props.type}`;

		const { name, image, type } = this.props;
		return (
			<div>
				<h3> {name}</h3>
				<img src={image} alt={altText} />
				<h5>Type: {type}</h5>
			</div>
		);
	}
}
