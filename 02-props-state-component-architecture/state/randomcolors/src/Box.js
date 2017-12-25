import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
	render() {
		const boxStyle = {
			backgroundColor: this.props.color
		};
		return <div className="box" style={boxStyle} />;
	}
}

export default Box;
