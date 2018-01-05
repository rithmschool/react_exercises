import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Route, Link, withRouter} from 'react-router-dom';


import EditTodoForm from './EditTodoForm';

class Todo extends Component{
	remove(){
		this.props.remove(this.props.id);
		this.props.history.push('/todos');
	}
	render(){
		let style;
		if (this.props.isComplete){
			style = {textDecoration: "line-through"}
		}
		return (
			<li id={this.props.id}>
				<h4><Link to={`/todos/${this.props.id}`}>{this.props.title}</Link></h4>
				<p style={style}>{this.props.description}</p>
				<button onClick={this.props.markComplete}>mark complete</button>
				
				<button onClick={this.remove.bind(this)}>remove</button>
				<button><Link to={`/todos/${this.props.id}/edit`}>edit</Link></button>


				<Route path={`/todos/${this.props.id}/edit`} render={props =>
					<EditTodoForm 
						title={this.props.title} 
						description={this.props.description}
						edit={this.props.edit}
						id={this.props.id}
						{...props} />
					}
				/>		
				
			</li> 
			)
	}
}
Todo.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	markComplete: PropTypes.func,
	remove: PropTypes.func,
	edit: PropTypes.func
}

export default withRouter(Todo);