import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLink from './CustomLink'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: '_blank'
    }
    this.handleClick = this.handleClick.bind(this);
    this.disableClick = this.disableClick.bind(this);
  }

  handleClick(e) {
    if (this.state.toggle == '') {
      e.preventDefault();
    }
  }

  disableClick() {
    this.state.toggle ? this.setState({toggle: ''}) : this.setState({toggle: '_blank'})
  }



  render() {
    let info = [
      {
        href: 'www.google.com',
        text: 'google'
      },
      {
        href: 'www.facebook.com',
        text: 'facebook'
      },
      {
        href: 'www.amazon.com',
        text: 'amazon'
      }
    ].map((info, idx) => {
      return (
        <CustomLink 
          href={info.href}
          text={info.text}
          handleClick={this.handleClick}
          target={this.state.toggle}
        />
      )
    })
    return (
      <div className="App">
        {info}
      <button onClick={this.disableClick}>Disable Links</button>
      </div>
    );
  }
}

export default App;
