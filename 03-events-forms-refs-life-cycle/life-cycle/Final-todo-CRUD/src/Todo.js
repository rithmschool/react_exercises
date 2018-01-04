import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap'
import Todoform from './Todoform'

class Todo extends Component {
	constructor(props){
		super(props)

		this.state = {
			done: false,
			isShowingEditForm: false
		}
		this.handleComplete = this.handleComplete.bind(this)
		this.toggleEditForm = this.toggleEditForm.bind(this)
	}

	handleComplete() {
		this.setState({done: !this.state.done})
	}

	toggleEditForm(){
		this.setState({isShowingEditForm: !this.state.isShowingEditForm})
	}

	render(){
		let buttonText = this.state.done ? "Mark as incomplete" : "Mark as complete";
		let completedStyle = this.state.done ? "success" : "danger";
		let buttonDecoration = this.state.done ? "line-through" : "none"
		let editForm = this.state.isShowingEditForm ? (
			<Todoform
				title={this.props.title}
				description={this.props.description}
				handleSubmit={this.props.updatedTodo}
				toggle={this.toggleEditForm}
			/>
		) : null;

		let styles = {
			textDecoration: buttonDecoration
		}

		return(
		  <ListGroupItem bsStyle={completedStyle}>
		    <h1 style={styles}> {this.props.title} </h1>
		    <p> {this.props.description} </p>
		    <button className='btn btn-warning' onClick={this.handleComplete}>{buttonText}</button>
		    <br/>
		    <button className='btn btn-danger' onClick={this.props.deleteTodo}>X</button>
		  	<br/>
		  	<button className='btn btn-warning' onClick={this.toggleEditForm}>Edit this todo</button>
		  	{editForm}
		  </ListGroupItem>
		)
	}
}

export default Todo;