import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifList from './GifList'
import GifForm from './GifForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GIPHY App</h1>
        <GifList />
      </div>
    );
  }
}

export default App;
