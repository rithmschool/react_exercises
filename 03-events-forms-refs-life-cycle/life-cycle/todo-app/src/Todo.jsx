import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Todo extends Component{
	render(){
		let style;
		if (this.props.isComplete){
			style = {textDecoration: "line-through"}
		}
		return (
			<li id={this.props.id}>
				<h4>{this.props.title}</h4>
				<p style={style}>{this.props.description}</p>
				<button onClick={this.props.markComplete}>mark complete</button>
				<button onClick={this.props.remove}>remove from list</button>
			</li> 
			)
	}
}
Todo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	markComplete: PropTypes.func,
	remove: PropTypes.func,
}

export default Todo;