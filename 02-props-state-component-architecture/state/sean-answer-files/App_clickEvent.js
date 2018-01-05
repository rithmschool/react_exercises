import React, { Component } from 'react';
import './App.css';

import ColorBox from "./color_box.js";

class App extends Component {
  constructor(props){
    super(props);

    let boxes = [];
    const boxNum = 28;

    for(let i = 0; i < boxNum; i++){
      let rColor = this.randomColor();
      boxes.push({
        id: i,
        color: rColor
      });
    }
    this.state = {boxes};

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e){
    console.log(e.target.id)
    const updatedBoxes = this.state.boxes.map( box => {
      if(box.id == e.target.id){
        box.color = this.randomColor();
      }
      return box;
    });
    this.setState({boxes: updatedBoxes})
  }
  

  randomColor(){
    let colorIndx = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[colorIndx];
  }
  render() {
    //Right after the RENDER is where all your LOGIC goes
    const boxes = this.state.boxes.map(box => (
      <ColorBox
        key={box.id}
        id={box.id}
        color={box.color}
        switchColor={this.changeColor}
      />
    ));

    // After the RETURN is where anything that has to do with HTML in the component goes
  return (
    <div className="App"> {boxes} </div>
  );
}
}

App.defaultProps = {
  colors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
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
