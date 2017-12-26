import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink'

class App extends Component {
  render() {
    return (
      <div>
          <h1>Custom Link</h1>
          <CustomLink url="https://www.google.com/" text="google" />
          <br/>
          <CustomLink url="https://www.google.com/" text="google" />
          <br/>
          <CustomLink url="https://www.google.com/" text="google" />
      </div>
    );
  }
}

export default App;
