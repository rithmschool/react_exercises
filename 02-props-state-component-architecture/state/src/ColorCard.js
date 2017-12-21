import React from "react";
import "./ColorCard.css";

const ColorCard = props => {
	console.log(props.color);
	return (
		<div style={{ backgroundColor: props.color }} className="ColorCard" />
	);
};

export default ColorCard;
