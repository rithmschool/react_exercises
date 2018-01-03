import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos : [
				{id: 1, title: 'chore', description: 'wash pots and pans', isComplete: false},
				{id: 2, title: 'chore', description: 'mow the lawn', isComplete: true}
			],
			idCounter : 3

		}
		this.handleMarkComplete = this.handleMarkComplete.bind(this);
		this.handleRemove = this.handleRemove.bind(this)
	}

	handleMarkComplete(id){
		let updatedTodos = this.state.todos.map(val => {
			if(val.id === id){
				val.isComplete = true;
			}
			return val;
		})
		this.setState({todos: updatedTodos})
	}

	handleRemove(id){
		this.setState({todos : [...this.state.todos.filter(val => val.id !==id)]});
	}


	render(){
		let todoListItems = this.state.todos.map(val => {
			return ( <Todo 
				key={val.id}
				id={val.id}
				title={val.title}
				description = {val.description}
				isComplete = {val.isComplete}
				markComplete={this.handleMarkComplete.bind(this,val.id)}
				remove={this.handleRemove.bind(this,val.id)}
			/>	)
		} )
		return (
			<ul>
				{ todoListItems }
			</ul>
		)	
	}

}

export default TodoList;