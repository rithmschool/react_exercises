import React, { Component } from 'react';
import './NamedComponent.css';

class FirstComponent extends Component {
  render() {
    return (
      <p className='center'>My name is {this.props.name}</p>
    );
  }
}

export default FirstComponent;