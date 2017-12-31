import React, { Component } from 'react';
import './App.css';
import CustomDiv from './CustomDiv';
import DivForm from './DivForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      divs : [{height: 500, width: 400, color : 'red', key : 0}],
      height : '',
      width : '',
      color : '',
      key : 0 
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit(){
    let height = Math.min(Math.max(this.state.height, 50), 500);
    let width = Math.min(Math.max(this.state.height, 50), 500);
    let color = this.props.allColors.includes(this.state.color) ? this.state.color : 'grey';
    let key = this.state.key + 1;
    this.setState({ key });
    this.setState({divs : [...this.state.divs,{height, width, color, key}]});

  }


  render() {
    let divs = this.state.divs.map(div => {
      return <CustomDiv key={div.key} height={div.height} width={div.width} color={div.color} />
    })


    return (
      <div className="App">
        <DivForm 
          height={this.state.height} 
          width={this.state.width} 
          color={this.state.color} 
          handleChange={this.handleChange.bind(this)} 
          handleSubmit={this.handleSubmit.bind(this)} 
        />
        <div className="container">
          {divs}
        </div>  
      </div>
    );
  }
}

App.defaultProps = {
  allColors : [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",  
    "Azure",
    "Beige",
    "Bisque",
    "Black",   
    "BlanchedAlmond",  
    "Blue",  
    "BlueViolet",  
    "Brown",   
    "BurlyWood",   
    "CadetBlue",   
    "Chartreuse",  
    "Chocolate",   
    "Coral",   
    "CornflowerBlue", 
    "Cornsilk",  
    "Crimson",   
    "Cyan", 
    "DarkBlue",  
    "DarkCyan",  
    "DarkGoldenRod",   
    "DarkGray",  
    "DarkGrey",  
    "DarkGreen",   
    "DarkKhaki",   
    "DarkMagenta",   
    "DarkOliveGreen",  
    "DarkOrange",  
    "DarkOrchid",  
    "DarkRed",   
    "DarkSalmon",  
    "DarkSeaGreen",  
    "DarkSlateBlue",   
    "DarkSlateGray",   
    "DarkSlateGrey",   
    "DarkTurquoise",   
    "DarkViolet",  
    "DeepPink",  
    "DeepSkyBlue",   
    "DimGray",   
    "DimGrey",   
    "DodgerBlue",  
    "FireBrick",   
    "FloralWhite",   
    "ForestGreen",   
    "Fuchsia",   
    "Gainsboro",   
    "GhostWhite",  
    "Gold",  
    "GoldenRod",   
    "Gray",  
    "Grey",  
    "Green",   
    "GreenYellow",   
    "HoneyDew",  
    "HotPink",   
    "IndianRed",   
    "Indigo",    
    "Ivory",   
    "Khaki",   
    "Lavender",  
    "LavenderBlush",   
    "LawnGreen",   
    "LemonChiffon",  
    "LightBlue",   
    "LightCoral",  
    "LightCyan",   
    "LightGoldenRodYellow",  
    "LightGray",   
    "LightGrey",   
    "LightGreen",  
    "LightPink",   
    "LightSalmon",   
    "LightSeaGreen",   
    "LightSkyBlue",  
    "LightSlateGray",  
    "LightSlateGrey",  
    "LightSteelBlue",  
    "LightYellow",  
    "Lime",  
    "LimeGreen",   
    "Linen",   
    "Magenta",   
    "Maroon",  
    "MediumAquaMarine",  
    "MediumBlue",  
    "MediumOrchid",  
    "MediumPurple",  
    "MediumSeaGreen",  
    "MediumSlateBlue",   
    "MediumSpringGreen",   
    "MediumTurquoise",   
    "MediumVioletRed",   
    "MidnightBlue",  
    "MintCream",   
    "MistyRose",   
    "Moccasin",  
    "NavajoWhite",   
    "Navy",  
    "OldLace",   
    "Olive",   
    "OliveDrab",   
    "Orange",  
    "OrangeRed",   
    "Orchid",  
    "PaleGoldenRod",   
    "PaleGreen",   
    "PaleTurquoise",   
    "PaleVioletRed",   
    "PapayaWhip",  
    "PeachPuff",   
    "Peru",  
    "Pink",  
    "Plum",  
    "PowderBlue",  
    "Purple",  
    "RebeccaPurple",   
    "Red",   
    "RosyBrown",   
    "RoyalBlue",   
    "SaddleBrown",   
    "Salmon",  
    "SandyBrown",  
    "SeaGreen",  
    "SeaShell",  
    "Sienna",  
    "Silver",  
    "SkyBlue",   
    "SlateBlue",   
    "SlateGray",  
    "SlateGrey",   
    "Snow",  
    "SpringGreen",   
    "SteelBlue",   
    "Tan",   
    "Teal",  
    "Thistle",   
    "Tomato",  
    "Turquoise",   
    "Violet",  
    "Wheat",
    "White",   
    "WhiteSmoke",
    "Yellow",
    "YellowGreen" ]
}

export default App;
