import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tweet from "./tweet.js";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet
          name="Michelle"
          username="genovese28"
          date={new Date().toDateString()}
          message="yah for coding!"
        />
        <Tweet
          name="Liam"
          username="liamPatrick"
          date={new Date().toDateString()}
          message="Go Redsocks!!"
        />
        <Tweet
          name="Scarlett"
          username="Princess"
          date={new Date().toDateString()}
          message="love princess!"
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
