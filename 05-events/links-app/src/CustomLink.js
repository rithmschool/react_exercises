import React, { Component } from 'react';

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        <a
          href={this.props.href}
          target="_blank"
          onClick={this.props.handleClick}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}
