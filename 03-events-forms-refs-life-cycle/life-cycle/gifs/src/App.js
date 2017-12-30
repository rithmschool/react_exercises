import React, { Component } from 'react';
import './App.css';
import GifList from './GifList'

class App extends Component {
  render() {
    return (
      <div id="body">
        <GifList />
      </div>
    );
  }
}

export default App;
