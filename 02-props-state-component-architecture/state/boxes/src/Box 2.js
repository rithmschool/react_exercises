import React, { Component } from 'react';
import './Box.css'

const Box = props => {
	const style = {
	    width: '175px',
	    height: '175px',
	    display: 'inline-block',
	    backgroundColor: props.color,
	}

	return (
		<div style={style} color={props.color} onClick={this.props.theClick} id={props.id}> 
		</div>
	)
}

export default Box;