import React, { Component } from 'react';
import './App.css';
import GifList from './GifList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Gif App</h1>
        <GifList />
      </div>
    );
  }
}

export default App;
