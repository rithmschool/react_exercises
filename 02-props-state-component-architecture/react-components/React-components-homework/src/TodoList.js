import React, {Component} from 'react';
import './TodoList.css';
import Todo from './Todo'
import Todoform from './Todoform'
import {ListGroup, Row, Grid} from 'react-bootstrap'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      todos: [
        {
          id: 1,
          title: "Grocery",
          description: "Buy food so I can have dinner",
        },
        {
          id: 2,
          title: "Workout",
          description: "Exercise so I can stop being fat",
        },
        {
          id: 3,
          title: "Learn React",
          description: "Learn react router and redux",
        }
      ],
      nextId: 4
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(newTodo){
    this.setState({
      todos: [{...newTodo, id: this.state.nextId}, ...this.state.todos],
      // todos: this.state.todos.concat({...newTodo, id: this.state.nextId}),
      nextId: this.state.nextId + 1
    })
  }

  handleEdit(id, updatedTodo){
    let newTodos = this.state.todos.map(todo => {
      if(id === todo.id){
        // First assign it all of the old attributes then overwrite it with updated
        todo = Object.assign({}, todo, updatedTodo)
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  handleDelete(idx){
    var newTodo = this.state.todos.filter(t => t.id !== idx)
    this.setState({todos: newTodo})
  }

  render(){
    return(
      <div className="App">
        <Grid>
          <Row>
            <h1>Add a Todo</h1>
            <Todoform handleSubmit={this.handleAdd} />
            <h1>Todo List</h1>
            <ListGroup>
              {this.state.todos.map(todo => {
                return (
                  <Todo 
                    key={todo.id}
                    title={todo.title} 
                    description={todo.description}
                    deleteTodo={this.handleDelete.bind(this, todo.id)}
                    updatedTodo={this.handleEdit.bind(this, todo.id)}
                  />
                )}
              )}
            </ListGroup>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default TodoList;
