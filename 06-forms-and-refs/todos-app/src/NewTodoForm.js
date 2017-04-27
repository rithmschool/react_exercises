import React, {Component} from 'react';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-area">
          <label>
            Title:
            <input 
              type="text" 
              placeholder="What do you need to do?"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </label>
        </div>
        <div className="input-area">
          <label>
            Description:
            <input 
              type="text" 
              placeholder="Details, please!"
              onChange={this.handleChange}
              name="description"
              value={this.state.description}
            />
          </label>
        </div>
        <input type="submit" value="Add this todo!"/>
      </form> 
    );
  }
}