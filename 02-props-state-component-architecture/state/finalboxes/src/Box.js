import React, { Component } from 'react';

class Box extends Component {
	render() {
		const style = {
			width: '175px',
			height: '175px',
			display: 'inline-block',
			backgroundColor: this.props.color

		}
		return (
			<div key={this.props.key} style={style} id={this.props.id} onClick={this.props.clickEvent}></div>
		)
	}
}

export default Box;