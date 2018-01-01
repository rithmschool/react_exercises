import React from 'react';
import './TodoList.css';
import Todo from './Todo'
import {ListGroup, ListGroupItem, Row, Grid} from 'react-bootstrap'

const TodoList = props => (
      <div className="App">
        <h1>Todo List</h1>
        <Grid>
          <Row>
            <ListGroup>
              {props.todos.map(todo => {
                return (
                  <ListGroupItem bsStyle='success' key={todo.id} >
                    <Todo 
                      title={todo.title} 
                      description={todo.description} />
                  </ListGroupItem>
                )}
              )}
            </ListGroup>
          </Row>
        </Grid>
      </div>
);


TodoList.defaultProps = {
  todos: [
    {
      id: 0,
      title: "Grocery",
      description: "Buy food so I can have dinner" 
    },
    {
      id: 1,
      title: "Workout",
      description: "Exercise so I can stop being fat" 
    },
    {
      id: 2,
      title: "Learn React",
      description: "Learn react router and redux" 
    }
  ]
}

export default TodoList;
