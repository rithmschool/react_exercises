import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ name: "one", done: false, id: 1 },
				{ name: "two", done: true, id: 2 }
			]
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleAdd(newTodo) {
		this.setState({ todos: [newTodo, ...this.state.todos] });
	}
	handleRemove(idx) {
		const newTodos = [...this.state.todos];
		newTodos.splice(idx, 1);
		this.setState({ todos: newTodos });
	}

	render() {
		const todos = this.state.todos.map((
			todo //{
		) => (
			<TodoItem
				key={todo.id}
				name={todo.name}
				done={todo.done}
				remove={this.handleRemove}
			/>
		));

		return (
			<section>
				<TodoForm addTodo={this.handleAdd} />
				{todos}
			</section>
		);
	}
} //})}
//</ul>
//</div>
