import React, { Component } from 'react';

class Todoform extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      title: this.props.title,
      description: this.props.description
  	}

    this.handleChange = this.handleChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const newTodo = {...this.state}
    this.props.handleSubmit(newTodo)
    
    this.setState({
      title: '',
      description: ''
    })

    if(this.props.title){
      this.props.toggle()
    }
  }

  render() {
    let buttonLabel = this.props.title ? "Edit this todo" : "Add this todo"
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input
              className='form-control'
              type='text'
              name='title'
              id='title'
              placeholder='what is your title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <input
              className='form-control'
              type='text'
              name='description'
              id='description'
              placeholder='what is your description'
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
            <button type = "submit" className='btn btn-primary'>{buttonLabel}</button>
        </form>
      </div>
    );
  }
}

Todoform.defaultProps = {
  title: "",
  description: ""
}

export default Todoform;