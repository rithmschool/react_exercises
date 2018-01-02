import React, { Component } from 'react';
import './Boxdiv.css';
export default class Boxdiv extends Component {
	constructor(props) {
		super(props);
	}

  render() {
  	var style = { background: this.props.bgcolor };
    return (
      <div onClick={this.props.changeColor} style={style} className="box" key={this.props.key} bgcolor={this.props.bgcolor}>
      </div> 
    );
  }	
};