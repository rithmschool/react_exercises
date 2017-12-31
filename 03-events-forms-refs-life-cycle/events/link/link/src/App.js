import React, { Component } from "react";
import CustomLink from "./CustomLink";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkedClick = this.handleLinkedClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { linksDisabled: false };
  }
  handleButtonClick() {
    this.setState({
      linksDisabled: !this.state.linksDisabled
    });
  }
  handleLinkedClick(e) {
    if (this.state.linksDisabled) e.preventDefault();
  }

  render() {
    let links = [
      {
        href: "https://www.facebook.com",
        text: "Facebook"
      },
      {
        href: "https://www.udemy.com",
        text: "Udemy"
      },
      {
        href: "https://www.rithmschool.com",
        text: "Rithm school"
      }
    ].map((link, idx) => (
      <CustomLink
        key={idx}
        href={link.href}
        text={link.text}
        handleClick={this.handleLinkedClick}
      />
    ));

    let buttonT = this.state.linksDisabled ? "Enable links" : "Disable links";

    let headerT = this.state.linksDisabled ? "Disabled" : "Enabled";

    return (
      <div>
        <h1>Awesome links!</h1>
        <h2>Links are {headerT.toUpperCase()}.</h2>
        {links}
        <button onClick={this.handleButtonClick}>{buttonT}</button>
      </div>
    );
  }
}

export default App;
