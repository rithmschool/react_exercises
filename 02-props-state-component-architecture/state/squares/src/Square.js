import React, { Component } from "react";

export default class Square extends Component {
  render() {
    const style = { backgroundColor: this.props.color };
    return <div className="Square" style={style} />;
  }
}
