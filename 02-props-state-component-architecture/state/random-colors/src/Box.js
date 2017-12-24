import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
	render() {
		const color = {
			backgroundColor: this.props.color
		};
		return <div className="box" style={color} />;
	}
}

export default Box;
