import React from 'react';

const Todo = props => (
  <div>
    <h1> {props.title} </h1>
    <p> {props.description} </p>
  </div>
);

export default Todo;