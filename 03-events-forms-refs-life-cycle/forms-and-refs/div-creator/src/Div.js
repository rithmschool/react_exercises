import React, { Component } from 'react';

class Div extends Component {
  render() {

    return (
      <div style={Object.assign(
          { width: this.props.width + "px"}, 
          { height: this.props.height + "px"}, 
          { backgroundColor: this.props.backgroundColor }
        )}
      />
    )
  }
}

export default Div;