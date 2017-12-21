import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.randColor()
    };

    setInterval(() => {
      this.setState(function(props) {
        return {
          color: this.randColor()
        };
      });
    }, 1000);
  }

  randColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    var divStyle = {
      backgroundColor: this.state.color
    };

    return <div style={divStyle} className="box" />;
  }
}

export default Square;
