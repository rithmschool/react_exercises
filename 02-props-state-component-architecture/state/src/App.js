import React, { Component } from "react";
import ColorCard from "./ColorCard";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: []
		};
		for (let i = 0; i < 24; i++) {
			this.state.colors.push(this.setColor());
		}
		setInterval(this.changeOne.bind(this), 300);
	}
	changeOne() {
		const picked = Math.floor(Math.random() * 24);
		let newColors = this.state.colors.slice();
		newColors[picked] = this.setColor();
		this.setState({ colors: newColors });
	}
	setColor() {
		const one = Math.floor(Math.random() * 256);
		const two = Math.floor(Math.random() * 256);
		const three = Math.floor(Math.random() * 256);
		return `rgb(${one}, ${two}, ${three})`;
	}
	render() {
		let colorsArray = this.state.colors.map(e => {
			return <ColorCard color={e} />;
		});
		return <div>{colorsArray}</div>;
	}
}

export default App;
