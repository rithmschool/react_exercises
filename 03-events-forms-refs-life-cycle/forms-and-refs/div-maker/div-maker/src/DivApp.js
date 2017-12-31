import React, { Component } from "react";
import DivForm from "./DivForm";

class DivApp extends Component {
  constructor(props) {
    super(props);
    this.state = { divInfo: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDivInfo) {
    this.setState({
      divInfo: this.state.divInfo.concat(newDivInfo)
    });
  }

  render() {
    let divs = this.state.divInfo.map((d, i) => (
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
        <h1>Make divs!</h1>
        <DivForm addDiv={this.handleAdd} />
        {divs}
      </div>
    );
  }
}

export default DivApp;
