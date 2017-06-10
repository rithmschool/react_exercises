import React, { Component } from 'react';
import './CustomLink.css';

class CustomLink extends Component {
  render() {
    

    return (
      <div>
        <a href={this.props.href} target="_blank">{this.props.text}</a>
      </div>
    )
  }
}


export default CustomLink;