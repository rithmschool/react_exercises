import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
	constructor(props) {
    	super(props);
    	this.state = { complete: false };
    	this.completeTodo = this.completeTodo.bind(this);
  	}

  	completeTodo() {
  		this.setState({
  			complete: !this.state.complete
  		});
  	}

	render() {
		let styleChange = this.state.complete ? 'yellow' : ''; 
	  	let style = { color: styleChange };
		return(
			<div className='todo-container'>
				<div className='todo-title'>
					<h3>{this.props.title}</h3>
				</div>
				<div className='todo-text'>
					<p>{this.props.text}</p>
				</div>
				<button onClick={this.props.removeTodo}>X</button>
				<button style={style} onClick={this.completeTodo}>Mark Complete</button>
			</div>
		)
	}
}

export default Todo;