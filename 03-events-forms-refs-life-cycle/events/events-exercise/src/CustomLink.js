import React, { Component } from 'react';

class CustomLink extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				<a 
					href={this.props.href}
					text={this.props.text}
					onClick={this.props.handleClick}
					target='_blank'
				>{this.props.text}</a>
			</div>
		)
	}
}

export default CustomLink;