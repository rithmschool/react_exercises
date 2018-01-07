import React, { Component } from "react";

class DivForm extends Component {
  constructor(props) {
    super(props);
    this.state = { nextId: 0, height: "", width: "", color: "#000000" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addDiv(this.state);
    let nextId = this.state.nextId + 1;
    this.setState({ nextId, height: "", width: "", color: "#000000" });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="number"
            value={this.state.width}
            name="width"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="color"
            value={this.state.color}
            name="color"
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Create Div" />
      </form>
    );
  }
}

export default DivForm;
