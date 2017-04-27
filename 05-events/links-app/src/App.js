import React, { Component } from 'react';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { linksDisabled: false };
  } 

  handleButtonClick() {
    this.setState({
      linksDisabled: !this.state.linksDisabled
    });
  }

  handleLinkClick(e) {
    if (this.state.linksDisabled) e.preventDefault();
  } 

  render() {
    let links = [
      {
        href: 'https://www.rithmschool.com',
        text: 'Rithm School'
      },
      {
        href: 'https://facebook.github.io/react/',
        text: 'React Docs'
      }, 
      {
        href: 'https://www.codewars.com/dashboard',
        text: 'CodeWars'
      }
    ].map(link => (
      <CustomLink
        href={link.href}
        text={link.text}
        handleClick={this.handleLinkClick}
      />
    ))

    let buttonText = this.state.linksDisabled ? 
      "Enable links" :
      "Disable Links";

    let headerText = this.state.linksDisabled ? "Disabled" : "Enabled";

    return (
      <div>
        <h1>Here are some of my favorite links!</h1>
        <h2>Links are currently {headerText.toUpperCase()}.</h2>
        {links}
        <button onClick={this.handleButtonClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
