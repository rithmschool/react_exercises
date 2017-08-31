import React, {Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const todos = this.props.todos.map(todo => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ));

    return (
        <div>
          {todos.reverse()}
        </div>
      );
  }
}

TodoList.defaultProps = {
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
  }],
  nextId: 3
};
