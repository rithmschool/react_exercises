import React, { Component } from "react";
import AddDivForm from "./AddDivForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [{ width: "200px", height: "200px", backgroundColor: "red" }]
    };
  }
  handleAdd(div) {
    this.setState({ divs: [...this.state.divs, div] });
  }
  render() {
    const divs = this.state.divs.map((e, i) => {
      return <div key={i} style={e} className="inline" />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Divs</h1>
        </header>
        <AddDivForm fnAdd={this.handleAdd.bind(this)} />
        {divs}
      </div>
    );
  }
}

export default App;
