import React, { Component } from 'react';
import './App.css';
import NewDivForm from "./NewDivForm";
import Div from "./Div";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      divs: []
    }
  }

  addDiv(width, height, backgroundColor) {
    let divs = this.state.divs;
    divs.push({
      width: width,
      height: height,
      backgroundColor: backgroundColor
    })
    this.setState({ divs });
  }

  render() {

    const divs = this.state.divs.map((item, i) => (
      <Div 
        key={i} 
        width={item.width}
        height={item.height}
        backgroundColor={item.backgroundColor}
      />
    ));

    return (
      <div className="App">
        <div className="App-header">
          <h2>Add a div, any div!</h2>
          <NewDivForm handleAdd={this.addDiv.bind(this)}/>
        </div>
        
        {divs}
      </div>
    );
  }
}

export default App;

