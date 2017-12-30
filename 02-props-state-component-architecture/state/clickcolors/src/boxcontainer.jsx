import React, { Component } from 'react';
import Box from './box';


class BoxContainer extends Component {
	constructor(props){
		super(props);
		let boxesInfo = [];
		for (let i = 1; i < 7; i++){
			boxesInfo.push({id: i, color: this.randomColor()})
		}
		this.state = { boxesInfo };
		this.changeColor = this.changeColor.bind(this);
	}

	randomColor(){
		let colors = ['Red', 'AliceBlue', 'CadetBlue', 'DarkCyan', 'Coral', 'DarkSeaGreen', 'GoldenRod', 'GreenYellow', 'Orchid', 'PeachPuff'];
		return colors[Math.floor(Math.random() * 10)];
	}

	changeColor(e){
		let updatedBoxesInfo = [...this.state.boxesInfo];
		updatedBoxesInfo[e.target.id-1] = {id: e.target.id, color: this.randomColor()}
		this.setState({boxesInfo: updatedBoxesInfo});
	}
	render(){
		const boxes = this.state.boxesInfo.map(box => {
			return < Box key={box.id} id={box.id} color={box.color} changeColor={this.changeColor} />
			});
		return <div className= 'container'>{boxes}</div>	
	}
}

export default BoxContainer;