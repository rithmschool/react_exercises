import React, { Component } from "react";
import CustomLink from "./CustomLink";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = this.props.links.map(e => {
      <CustomLink href={e.href} text={e.text} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Part1</h1>
        </header>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      href: "https://leetcode.com/",
      text: "LeetCode"
    },
    {
      href: "https://codewars.com/",
      text: "LeetCode"
    },
    {
      href: "https://hackerrank.com/",
      text: "HackerRank"
    }
  ]
};

export default App;
