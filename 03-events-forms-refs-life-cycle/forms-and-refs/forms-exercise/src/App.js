import React, { Component } from "react";
import "./App.css";
import Div from "./Div";
import DivForm from "./DivForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  margin: 10px auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { divs: [] };
    this.handleAddDiv = this.handleAddDiv.bind(this);
  }

  handleAddDiv(newDiv) {
    this.setState({ divs: [newDiv, ...this.state.divs] });
  }

  render() {
    const divs = this.state.divs.map(div => (
      <Div
        key={div.nextId}
        height={div.height}
        width={div.width}
        color={div.color}
      />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Forms Exercise</h1>
        </header>
        <p className="App-intro">To get started, add a div.</p>
        <DivForm addDiv={this.handleAddDiv} />
        <Wrapper>{divs}</Wrapper>
      </div>
    );
  }
}

export default App;
