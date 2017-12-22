import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponet />
        <NamedComponent name="Michelle" />
      </div>
    );
  }
}

ReactDOM.render(<App name="Michelle" />, document.getElementById("app"));
