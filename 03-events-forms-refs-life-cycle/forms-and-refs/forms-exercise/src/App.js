import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'


class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      divs: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit(e) {

    const style = {
      height: `${e[0].height}px`,
      width: `${e[0].width}px`,
      backgroundColor: `${e[0].color}`,
      display: 'inline-block'
    }

    const newDivs = e.map((div, idx) => {
      return(
        <div key={idx} style={style}>
        </div>
      )
    })
    this.setState({ divs: [...this.state.divs, newDivs] })
  }


  render() {
    const divs = this.state.divs.map(div => {
      return (div);
    })
    return (
      <div className="App">
        <Form 
          handleSubmit={this.handleSubmit}
          />
        { divs }
      </div>
    );
  }
}

export default App;
