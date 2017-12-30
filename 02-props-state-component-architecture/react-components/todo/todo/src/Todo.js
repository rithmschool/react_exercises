import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ name: "one", done: false, id: 1 },
				{ name: "two", done: true, id: 2 }
			]
		};
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.todos.map(function(todo) {
						return (
							<TodoItem
								key={todo.id}
								name={todo.name}
								done={todo.done}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
