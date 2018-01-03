import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
    	super(props);
  	}
	render() {
		return(
			<ul>
				<h3>{this.props.title}</h3>
				<p>{this.props.text}</p>
			</ul>
		)
	}
}

export default Todo;