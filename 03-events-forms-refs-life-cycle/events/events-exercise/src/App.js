import React, { Component } from "react";
import "./App.css";
import CustomLink from "./CustomLink";
import styled from "styled-components";

const Button = styled.button`
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  :hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
    cursor: pointer;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { linksEnabled: true };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
  }
  handleClickLink(e) {
    if (!this.state.linksEnabled) {
      e.preventDefault();
    }
  }

  handleClickButton() {
    this.setState({ linksEnabled: !this.state.linksEnabled });
  }
  render() {
    let links = [
      {
        href: "https://www.google.com",
        text: "Google"
      },
      {
        href: "https://www.github.com",
        text: "Github"
      },
      {
        href: "https://reactjs.org",
        text: "React"
      }
    ].map((link, i) => (
      <CustomLink
        key={i}
        href={link.href}
        text={link.text}
        handleClick={this.handleClickLink}
      />
    ));
    let buttonText = this.state.linksEnabled ? "Disable Links" : "Enable Links";
    let linkStatusText = this.state.linksEnabled ? "enabled" : "disabled";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oh hai! Welcome to the Events Exercise</h1>
        </header>
        <p className="App-intro">Links are currently {linkStatusText}.</p>
        <p>{links}</p>
        <div>
          <Button onClick={this.handleClickButton}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}

export default App;
