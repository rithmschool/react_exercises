import React, { Component} from 'react';
import propTypes from 'prop-types';

class EditTodoForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.title,
			description: this.props.description
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}
	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	handleEdit(e){
		e.preventDefault();
		this.props.edit(this.props.id, this.state.title, this.state.description);
	}



	render(){
		return(
			<form >
				<label htmlFor="title">Title</label>
				<input onChange = {this.handleChange} name="title" value={this.state.title} />

				<label htmlFor="description">Description</label>
				<input onChange= {this.handleChange} name="description" value={this.state.description} />

				<button onClick={this.handleEdit}>edit</button>
			</form>

			)
	}
}

EditTodoForm.propTypes = {
	title : propTypes.string,
	description : propTypes.string,
	edit: propTypes.func,
	id : propTypes.number
}

export default EditTodoForm;