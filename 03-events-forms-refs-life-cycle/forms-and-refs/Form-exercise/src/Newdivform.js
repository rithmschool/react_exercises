import React, { Component } from 'react';

class Newdivform extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      id: '',
      height: '',
      width: '',
      color: ''
  	}

    this.handleChange = this.handleChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const newDiv = {...this.state, id: this.props.number+1 }
    this.props.addDiv(newDiv)
    this.setState({
      id: '',
      height: '',
      width: '',
      color: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add a div form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='height'>Height:</label>
          <input
            type='text'
            name='height'
            id='height'
            placeholder='what is your div height'
            onChange={this.handleChange}
            value={this.state.height}
          />
          <label htmlFor='width'>Width:</label>
          <input
            type='text'
            name='width'
            id='width'
            placeholder='what is your div width'
            onChange={this.handleChange}
            value={this.state.width}
          />
          <label htmlFor='color'>Color:</label>
          <input
            type='text'
            name='color'
            id='color'
            placeholder='what is your div color'
            onChange={this.handleChange}
            value={this.state.color}
          />
          <input type = "submit" value="add" />
        </form>
      </div>
    );
  }
}

export default Newdivform;