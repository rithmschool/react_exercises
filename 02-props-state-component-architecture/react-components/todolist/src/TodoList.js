import React, { Component } from 'react';
import Todo from './Todo'


class TodoList extends Component {
	constructor(props){
   		super(props);
  	}
	render() {
		const todos = this.props.todos.map(todo => {
			return (
				<Todo key={todo.id}
					title={todo.title}
					text={todo.text}
				/>
			)
		})
		return (
			<div>
				<h1>TodoList!</h1>
				{todos}
			</div>
		)
	}
}

TodoList.defaultProps = {
	todos: [{
		id: 1,
		title: 'Do THIS!!',
		text: 'Get homework done!'
	}]
}

export default TodoList;