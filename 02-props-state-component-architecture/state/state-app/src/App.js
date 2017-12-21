import React, { Component } from 'react';
import './App.css';
import Square from "./Square";

const getRandomColor = () => {
  const chars = "0123456789ABCDEF";
  var colorCode = "#";
  for (var i=0; i<6; i++) {
    var idx = Math.floor(Math.random() * chars.length);
    colorCode += chars[idx];
  }
  return colorCode;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors:  [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
                getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
                getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
                getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
                getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
                getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
    }

    // setInterval(() => {
    //   var index = Math.floor(Math.random() * 24);
    //   const colors = this.state.colors.slice();
    //   colors[index] = getRandomColor();
    //   this.setState({ colors });
    // }, 300);
  }

  removeSquare(id) {
    let boxes = this.state.colors.slice();
    // for (var i = 0; i < boxes.length; i++) {
    //   if (boxes[i].id === id) break;
    // }
    boxes.splice(id, 1);
    this.setState({ colors:boxes });
  }

  changeSquare(id) {
    let boxes = this.state.colors.slice();
    boxes[id] = getRandomColor();
    this.setState({ colors:boxes });
  }

  render() {
    
    const colors = this.state.colors.map((curColor, i) => (
        <Square 
          color={curColor} 
          key={i}
          handleRemove={this.removeSquare.bind(this, i)}
          handleChange={this.changeSquare.bind(this, i)}
        />
      ))

    return (
      <div>
        {colors}
      </div>
    );
  }
}

export default App;
