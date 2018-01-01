import React, { Component } from 'react';
import './Boxdiv.css';
export default class Boxdiv extends Component {
	constructor(props) {
		super(props);
	}

  render() {
  	var style = { background: this.props.bgcolor };
    return (
      <div style={style} className="poke-card" key={this.props.key} bgcolor={this.props.bgcolor}>
      </div> 
    );
  }	
};