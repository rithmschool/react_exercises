import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    
    var curStyle;

    if (this.props.side === "down") {
      curStyle = {backgroundColor: "lightgray"};
    } else {
      curStyle = {backgroundColor: this.props.color};
    }


    return (
      <div
        style={curStyle} 
        className="card"
        onClick={this.props.handleFlip}>
          &nbsp;
      </div>
    )
  }
}


export default Card;