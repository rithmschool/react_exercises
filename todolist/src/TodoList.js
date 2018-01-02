import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const todos = this.props.todos.map(todo => (
			<Todo
				key={todo.id}
				task={todo.title}
				description={todo.description}
			/>
		));

		return <div>{todos}</div>;
	}
}

export default TodoList;
