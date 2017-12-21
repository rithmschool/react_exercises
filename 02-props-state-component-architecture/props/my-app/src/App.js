import React, {Component} from 'react'
import {render} from 'react-dom'
import Pokedex from "./Pokedex"

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Pokedex/>
    );
  }
}