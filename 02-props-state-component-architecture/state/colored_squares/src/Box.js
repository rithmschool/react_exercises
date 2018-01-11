import React, { Component } from 'react';
import "./Box.css";

class Box extends Component {
  render() {
      const boxStyle = {
        width: '180px',
        height: '180px',
        display: 'inline-block',
        backgroundColor: this.props.color
      }
    return <div className="box" style={boxStyle} />;
  };
}



export default Box;
