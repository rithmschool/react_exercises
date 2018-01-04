import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { Route, Switch, Redirect } from "react-router-dom";

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
	componentWillMount() {
		let todos = JSON.parse(localStorage.getItem("todos")) || [];
		let nextId = +JSON.parse(localStorage.getItem("nextId")) || 0;
		this.setState({ todos, nextId });
	}
	toggleComplete(id) {
		const newTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return todo;
		});
		this.setState(
			{
				todos: newTodos
			},
			() => {
				localStorage.setItem("todos", JSON.stringify(this.state.todos));
			}
		);
	}

	addTodo(e) {
		const newTodo = { ...e, id: this.state.nextId };
		this.setState(
			{
				todos: [newTodo, ...this.state.todos],
				nextId: this.state.nextId + 1
			},
			() => {
				localStorage.setItem("todos", JSON.stringify(this.state.todos));
				localStorage.setItem("nextId", this.state.nextId);
			}
		);
	}

	handleDelete(id) {
		let newTodos = this.state.todos.filter(todo => todo.id !== id);
		this.setState(
			{
				todos: newTodos
			},
			() => {
				localStorage.setItem("todos", JSON.stringify(this.state.todos));
			}
		);
	}

	handleEdit(id, newPropObj) {
		let newTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo = Object.assign({}, todo, newPropObj);
			}
			return todo;
		});

		this.setState(
			{
				todos: newTodos
			},
			() => {
				localStorage.setItem("todos", JSON.stringify(this.state.todos));
			}
		);
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
				<Switch>
					<Route
						path="/todos/new"
						render={props => (
							<NewTodoForm handleAdd={this.addTodo} {...props} />
						)}
					/>
					<Route
						path="/todos"
						render={props => <div>{allTodos}</div>}
					/>
					<Redirect to="/todos" />
				</Switch>
			</div>
		);
	}
}

export default TodoList;
