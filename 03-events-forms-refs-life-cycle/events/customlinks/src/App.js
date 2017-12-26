import React, { Component } from "react";
import CustomLink from "./CustomLink";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { linksDisabled: false };
  }

  handleButtonClick() {
    this.setState({
      linkDisabled: !this.state.linksDisabled
    });
  }

  handleLinkClick(e) {
    if (this.state.linksDisabled) {
      e.preventDefault();
    }
  }

  render() {
    let linksData = [
      {
        href: "https://www.google.com",
        text: "Google"
      },
      {
        href: "https://www.facebook.com",
        text: "Facebook"
      },
      {
        href: "https://www.amazon.com",
        text: "Amazon"
      }
    ];

    let links = linksData.map((link, idx) => (
      <CustomLink
        key={idx}
        href={link.href}
        text={link.text}
        handleClick={this.handleLinkClick}
      />
    ));

    let buttonText = this.state.linksDisabled ? "enable" : "disable";

    return (
      <div>
        {links}
        <button onClick={this.handleButtonClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
