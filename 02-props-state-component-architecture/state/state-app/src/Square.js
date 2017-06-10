import React, { Component } from 'react';
import './Square.css';


class Square extends Component {

  render() {
    var curStyle = {backgroundColor: this.props.color};

    return (
      <div style={curStyle} className="square">
        <button className="new" onClick={this.props.handleChange}>New Color</button>
        <button className="delete" onClick={this.props.handleRemove}>X</button>
      </div>
    )
  }
}

export default Square;