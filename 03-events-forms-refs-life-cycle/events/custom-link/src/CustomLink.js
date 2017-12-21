import React, { Component } from 'react';
import './CustomLink.css';

class CustomLink extends Component {
  render() {

    let href = this.props.href;
    if (this.props.status === "disabled") {
      href = "JavaScript:void(0)";
    }

    return (
      <div>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
        >{this.props.text}</a>
      </div>
    )
  }
}


export default CustomLink;