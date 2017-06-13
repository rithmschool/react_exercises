import React, { Component } from 'react';

class ResetButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleReset}>Play again</button>
    )
  }
}


export default ResetButton;