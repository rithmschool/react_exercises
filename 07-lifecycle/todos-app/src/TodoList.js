import React, {Component} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount(){
    let storedTodos = JSON.parse(localStorage.getItem('todos'));
    this.setState({
      latestId: storedTodos && storedTodos.length ? storedTodos[storedTodos.length-1].id : 0,
      todos: storedTodos || []
    })
  }

  handleAdd(newTodo) {
    this.setState({
      latestId: ++this.state.latestId,
      todos: this.state.todos.concat({...newTodo, isComplete: false, id: this.state.latestId})
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    });
  }

  handleEdit(updatedTodo, id){
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({},todo,updatedTodo)
      }
      return todo
    });
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    });
  }

  handleDelete(idx) {
    let newTodos = this.state.todos.filter(t => t.id !== idx);
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    });
  }

  toggleComplete(updatedTodo, id, complete){
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({},todo,updatedTodo, {isComplete: complete})
      }
      return todo
    });
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    });
  }

  render(){
    const todos = this.state.todos.map((todo,idx) => (
        <Todo
          key={idx}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          handleDelete={this.handleDelete.bind(this, todo.id)}
          handleEdit={this.handleEdit}
          toggleComplete={this.toggleComplete.bind(this,todo, todo.id)}
          isComplete={todo.isComplete}
        />
      ));

    return (
        <div>
          <TodoForm addTodo={this.handleAdd}/>
          {todos.reverse()}
        </div>
      );
  }
}