import React, { Component } from 'react';

class Div extends Component {
  render() {

    return (
      <div style={Object.assign(
          { width: this.props.width }, 
          { height: this.props.height }, 
          { backgroundColor: this.props.backgroundColor }
        )}
      />
    )
  }
}

export default Div;