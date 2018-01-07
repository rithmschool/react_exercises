import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
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
				title={todo.title}
				details={todo.details}
				done={todo.done}
				remove={this.handleRemove}
				add={this.handleAdd}
			/>
		));

		return (
			<div>
				<Route
				 exact
				 path="/todos"
				 render={() => <div>{todos} </div>}
				 />
				 <Route
				  exact
				  path="/todos/new"
				  render={routeProps => TodoForm handleSubmit ={this.handleAdd} {...routeProps}/>}
				  />
				  <Route
				   exact
				   path="/todos/:id/"
				   render={props =>
				   	todos.find(t => t.props.id === +props.match.params.id) || null}
				   />
				   <Route
				   exact
				   path="/todos/:id/edit"
				   render={props => {
				   	let todo = todos.find(t => t.props.id === +props.match.params.id) || null;
				   	return (
				   		<TodoForm
				   	{...props}
				   	handleSubmit= {this.handleChange.bind(this, todo.props.id)}
				   	title={todo.props.title}
				   	details={todo.props.details}
				   	/>
				   	)
				   }}
			/>
		);
	}
} //})}
//</ul>
//</div>
