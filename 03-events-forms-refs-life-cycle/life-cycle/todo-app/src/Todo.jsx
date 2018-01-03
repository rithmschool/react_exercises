import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import EditTodoForm from './EditTodoForm';

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
				<hr />
				<button onClick={this.props.remove}>remove</button>
				<EditTodoForm 
					title={this.props.title} 
					description={this.props.description}
					edit={this.props.edit}
					id={this.props.id} />
				<hr />	
			</li> 
			)
	}
}
Todo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	markComplete: PropTypes.func,
	remove: PropTypes.func,
	edit: PropTypes.func
}

export default Todo;