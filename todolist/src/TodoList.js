import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			nextId: 1,
			editTodo: ""
		};

		this.addTodo = this.addTodo.bind(this);
	}

	handleEdit(id) {
		let editedTodo = this.state.todos.filter(t => t.id === id);
		let editTodos = this.state.todos.map(el => {
			if (el.id === id) {
				return editedTodo;
			}
			return el;
		});
		this.setState({
			todos: editTodos
		});
	}

	addTodo(e) {
		this.setState({
			todos: [e, ...this.state.todos],
			nextId: this.state.nextId + 1
		});
	}

	handleDelete(id) {
		let newTodos = this.state.todos.filter(t => t.id !== id);
		this.setState({
			todos: newTodos
		});
	}

	render() {
		const allTodos = this.state.todos.map(todo => (
			<Todo
				key={todo.id}
				id={todo.id}
				title={todo.title}
				description={todo.description}
				handleDelete={this.handleDelete.bind(this, todo.id)}
			/>
		));

		return (
			<div>
				<NewTodoForm handleAdd={this.addTodo} />
				{allTodos}
			</div>
		);
	}
}

export default TodoList;
