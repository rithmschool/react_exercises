import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  render() {
    const list = this.props.list.map((td) =>
      <Todo key={td.id}
            itemName={td.itemName}
            description={td.description} />

  )
    return (
      <div>
        {list}
      </div>
    );
  }
}

TodoList.defaultProps = {
  list: [{
    id: 0,
    itemName: "Finish AM warmups",
    description: "Do Rithm School Morning Warm Ups over break"
  }, {
    id: 1,
    itemName: "Watch The Last Jedi",
    description: "Watch the new star wars movie over break"
  }, {
    id: 2,
    itemName: "Create react app",
    description: "due tomorrow"
  }],
  nextId: 3
}

export default TodoList;
