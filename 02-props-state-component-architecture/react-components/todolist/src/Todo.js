import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
    	super(props);
  	}
	render() {
		return(
			<div>
				<ul>
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
				</ul>
				<button onClick={this.props.removeTodo}>X</button>
				<button onClick={this.props.completeTodo}>Mark Complete</button>
			</div>
		)
	}
}

export default Todo;