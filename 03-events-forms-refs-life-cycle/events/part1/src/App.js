import React, { Component } from "react";
import CustomLink from "./CustomLink";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((prevState, props) => {
      return { disabled: !prevState.disabled };
    });
  }
  render() {
    let buttonText;
    let links;
    if (this.state.disabled) {
      buttonText = "Enable Links";
      links = this.props.links.map(e => {
        return (
          <CustomLink
            key={e.href}
            href="javascript:void(0);"
            text={e.text}
            underline={false}
          />
        );
      });
    } else {
      buttonText = "Disable Links";
      links = this.props.links.map(e => {
        return (
          <CustomLink
            key={e.href}
            href={e.href}
            text={e.text}
            underline={true}
          />
        );
      });
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Part1</h1>
        </header>
        <section>
          {links}
          <button onClick={this.handleClick}>{buttonText}</button>
        </section>
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
      text: "CodeWars"
    },
    {
      href: "https://hackerrank.com/",
      text: "HackerRank"
    }
  ]
};

export default App;
