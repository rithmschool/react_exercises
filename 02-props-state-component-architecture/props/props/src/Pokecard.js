import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
	return (
		<div className="card">
			<h3 className="name">{props.name}</h3>
			<img src={props.image} alt={props.name} />
			<p className="type">Type: {props.type}</p>
		</div>
	);
};

export default Pokecard;
