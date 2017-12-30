import React, { Component } from 'react';

class CustomLink extends Component{
	render(){
		let style = {
			color: this.props.color
		}
		return (
			<li>
				<a 
					href={this.props.link} 
					target='_blank' 
					onClick={this.props.handleClick}
					style = {style}
				>{this.props.text}</a> 
			</li>

		)
	}
}

export default CustomLink;