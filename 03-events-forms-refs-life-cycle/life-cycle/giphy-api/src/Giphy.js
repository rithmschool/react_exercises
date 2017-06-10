import React, { Component } from 'react';

class Giphy extends Component {
  render() {

    return (
      <img src={this.props.url} alt={this.props.url}/>
    )
  }
}

export default Giphy;