import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var squares = [];
    const numSquares = 24;
    for (var i = 0; i < numSquares; i++) {
      let randomColor = this.getRandomColor();
      squares.push({
        id: i,
        color: randomColor
      });
    }
    this.state = {squares: squares};

    setInterval(() => {
      var newSquares = this.state.squares.slice();
      let randomSquareIdx = Math.floor(Math.random() * newSquares.length);
      newSquares[randomSquareIdx] = Object.assign({}, newSquares[randomSquareIdx], {color: this.getRandomColor()})
      this.setState({
        squares: newSquares
      });
    }, 300);
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const squares = this.state.squares.map(s => 
      <Square key={s.id} color={s.color} />
      );
    return (
      <div className="App">
        {squares}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
}

export default App;
