import React, { Component } from 'react';
import NewDivForm from './NewDivForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { divData: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDivData) {
    this.setState({
      divData: this.state.divData.concat(newDivData)
    });
  }

  render() {
    let divs = this.state.divData.map((d,i) => (
      <div 
        style={{
          width: d.width + "px",
          height: d.height + "px",
          backgroundColor: d.backgroundColor
        }} 
        key={i}
      />
    ));

    return (
      <div>
        <h1>Let's make some divs!</h1>
        <NewDivForm addDiv={this.handleAdd}/>
        {divs}
      </div>
    );
  }
}

export default App;
