import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			nextId: 1
		};
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleDelete(idx) {
		let newTodos = this.state.todos.filter(t => t.id !== idx);
		this.setState({
			todos: newTodos
		});
	}

	handleAdd(newTodo) {
		this.setState({
			todos: this.state.todos.concat({
				...newTodo,
				id: this.state.nextId
			}),
			nextId: ++this.state.nextId
		});
	}

	render() {
		const allTodos = this.state.todos.map(todo => (
			<Todo
				key={todo.id}
				title={todo.title}
				description={todo.description}
				handleDelete={this.handleDelete.bind(this, todo.id)}
			/>
		));

		return (
			<div>
				<NewTodoForm addTodo={this.handleAdd} />
				{allTodos.reverse()}
			</div>
		);
	}
}

export default TodoList;
