import React, { Component } from 'react';
import propTypes from 'prop-types';


class NewTodoForm extends Component{
	render(){
		return(
			<form onSubmit={this.props.addTodo}>
				<label htmlFor="title">Title</label>
				<input onChange = {this.props.inputChange} name="inputTitle" value={this.props.inputTitle} />

				<label htmlFor="description">Description</label>
				<input onChange= {this.props.inputChange} name="inputDescription" value={this.props.inputDescription} />

				<input type="submit" value="add to do item" />
			</form>
			)
	}
}
NewTodoForm.propTypes = {
	inputTitle: propTypes.string,
	inputDescription: propTypes.string,
	addTodo : propTypes.func,
	inputChange : propTypes.func
}

export default NewTodoForm;