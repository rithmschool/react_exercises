import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component{
	render(){
		let boxStyle = {
			backgroundColor : this.props.color
		}
		return (
			<div
				className="box"
				id = {this.props.id}
				style={boxStyle}
				onClick= {this.props.changeColor} >	
			</div>
			)
	}
}

Box.propTypes = {
	changeColor: PropTypes.func
}

export default Box;