import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
	return (
		<li className="Pokecard">
			<h3> {props.name}</h3>
			<img src={props.image} />
			<p> Type: {props.type}</p>
		</li>
	);
};

export default Pokecard;
