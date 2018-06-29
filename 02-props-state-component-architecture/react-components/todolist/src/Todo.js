import React, { Component } from 'react';
import './Todo.css'
import EditForm from './EditForm'

class Todo extends Component {
	constructor(props) {
    	super(props);
    	this.state = { complete: false, edit: false };
    	this.completeTodo = this.completeTodo.bind(this);
    	this.editTodo = this.editTodo.bind(this);
    	this.toggleEdit = this.toggleEdit.bind(this);
  	}

  	completeTodo() {
  		this.setState({
  			complete: !this.state.complete
  		});
  	}

  	editTodo(e) {
  		this.setState({
  			edit: !this.state.edit
  		})
  	}

  	toggleEdit(e) {
  		console.log('in toggle')
  		this.setState({
  			edit: false
  		})
  	}

	render() {
		let styleChange = this.state.complete ? 'yellow' : ''; 
	  	let style = { color: styleChange };
		
	  	if (this.state.edit === false) {
			return(
				//if edit is not activated
				<div className='todo-container'>
					<div className='todo-title'>
						<h3>{this.props.title}</h3>
					</div>
					<div className='todo-text'>
						<p>{this.props.text}</p>
					</div>
					<button onClick={this.props.removeTodo}>X</button>
					<button style={style} onClick={this.completeTodo}>Mark Complete</button>
					<button onClick={this.editTodo}>Edit</button>
				</div>
			)
			} 
			//if edit is clicked and activated
		else {
			return (
				<div className='todo-container'>
					<EditForm id={this.props.id} toggleEdit={this.toggleEdit} currentTodo={{title: this.props.title, text: this.props.text}} addEdits={this.props.addEdits}/>
				</div>
			)
		}
	}
}

export default Todo;