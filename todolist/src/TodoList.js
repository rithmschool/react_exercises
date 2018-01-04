import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			nextId: 0
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
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

	toggleComplete(id) {
		const newTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return todo;
		});
		this.setState({
			todos: newTodos
		});
	}

	addTodo(e) {
		const newTodo = { ...e, id: this.state.nextId };
		this.setState({
			todos: [newTodo, ...this.state.todos],
			nextId: this.state.nextId + 1
		});
	}

	handleDelete(id) {
		let newTodos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos: newTodos
		});
	}

	handleEdit(id, newPropObj) {
		let newTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo = Object.assign({}, todo, newPropObj);
			}
			return todo;
		});

		this.setState({ todos: newTodos });
	}

	render() {
		const allTodos = this.state.todos.map(todo => (
			<Todo
				key={todo.id}
				id={todo.id}
				title={todo.title}
				description={todo.description}
				handleDelete={() => this.handleDelete(todo.id)}
				handleEdit={newPropObj => this.handleEdit(todo.id, newPropObj)}
				toggleComplete={() => this.toggleComplete(todo.id)}
				complete={todo.complete}
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
