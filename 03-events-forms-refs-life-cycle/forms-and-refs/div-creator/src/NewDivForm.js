import React, { Component } from 'react';

class NewDivForm extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.width, this.state.height, this.state.backgroundColor);
    this.setState({
      width: '',
      height: '',
      backgroundColor: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="width"
          type="text"
          onChange={this.handleChange}
          placeholder="200"
          value={this.state.width}
        />
        <span>&nbsp;</span>
        <input
          name="height"
          type="text"
          onChange={this.handleChange}
          placeholder="100"
          value={this.state.height}
        />
        <span>&nbsp;</span>
        <input
          name="backgroundColor"
          type="text"
          onChange={this.handleChange}
          placeholder="green"
          value={this.state.backgroundColor}
        />
        <span>&nbsp;</span>
        <button type="submit">
          <span>+</span>
        </button>
      </form>

    )
  }
}


export default NewDivForm;