import React, { Component } from 'react';
import "./ColorBox.css"

class ColorBox extends Component {
  render() {
    const style = { 
      backgroundColor: this.props.color 
    };
    return (
      <div
        className="box"
        style={style}
        onClick={this.props.switchColor}
        key={this.props.id}
      ></div>
    );
  }
}

export default ColorBox;