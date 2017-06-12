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
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let latestId = +JSON.parse(localStorage.getItem('latestId')) || 0;
    this.setState({ todos, latestId });
  }

  handleAdd(newTodo) {
    this.setState({
      latestId: ++this.state.latestId,
      todos: [{
        ...newTodo, 
        isShowingEditForm: false, 
        isComplete: false, 
        id: this.state.latestId
      }, ...this.state.todos]
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      localStorage.setItem('latestId', this.state.latestId);
    });
  }

  handleEdit(updatedTodo, id){
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({},todo,updatedTodo, {isShowingEditForm: false});
      }
      return todo;
    });
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  handleDelete(idx) {
    let newTodos = this.state.todos.filter(t => t.id !== idx);
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  toggle(id, field, bool){
    let obj = field === 'complete' ? {isComplete: bool} : {isShowingEditForm: bool};
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({},todo, obj);
      }
      return todo;
    });
    this.setState({todos: newTodos}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  render(){
    const todos = this.state.todos.map((todo,idx) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          handleDelete={this.handleDelete.bind(this, todo.id)}
          handleEdit={this.handleEdit}
          toggleComplete={this.toggle.bind(this,todo.id)}
          isComplete={todo.isComplete}
          toggleEditForm={this.toggle.bind(this,todo.id)}
          isShowingEditForm={todo.isShowingEditForm}
        />
      ));

    return (
        <div>
          <TodoForm handleSubmit={this.handleAdd}/>
          {todos}
        </div>
      );
  }
}