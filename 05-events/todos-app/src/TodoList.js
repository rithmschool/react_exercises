import React, {Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [{
        id: 0,
        title: "Walk Whiskey", 
        description: "Dogs need exercise"
      }, {
        id: 1,
        title: "Build React Apps",
        description: "Practice makes perfect!"
      }, {
        id: 2,
        title: "Take a nap",
        description: "Sleep is important"
      }]
    };
  }

  handleDelete(idx) {
    let newTodos = this.state.todos.filter(t => t.id !== idx);
    this.setState({todos: newTodos});
  }

  render(){
    const todos = this.state.todos.map(todo => (
        <Todo 
          key={todo.id}
          title={todo.title}
          description={todo.description}
          handleDelete={this.handleDelete.bind(this, todo.id)} 
        />
      ));

    return (
        <div>
          {todos}
        </div>
      );
  }
}