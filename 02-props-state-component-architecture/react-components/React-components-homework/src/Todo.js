import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap'


class Todo extends Component {
	constructor(props){
		super(props)

		this.state = {
			done: false
		}
		this.handleComplete = this.handleComplete.bind(this)
	}

	handleComplete() {
		this.setState({done: !this.state.done})
	}

	render(){
		let buttonText = this.state.done ? "Mark as incomplete" : "Mark as complete";
		let buttonDecoration = this.state.done ? "line-through" : "none"

		let styles = {
			textDecoration: buttonDecoration
		}

		return(
		  <ListGroupItem bsStyle='success'>
		    <h1 style={styles}> {this.props.title} </h1>
		    <p> {this.props.description} </p>
		    <button className='btn btn-warning' onClick={this.handleComplete}>{buttonText}</button>
		    <br/>
		    <button className='btn btn-danger' onClick={this.props.deleteTodo}>X</button>
		  </ListGroupItem>
		)
	}
}

export default Todo;