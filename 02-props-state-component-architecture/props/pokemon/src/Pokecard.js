import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Pokecard extends Component {
  render() {
    return (
      <div className="card">
        <h1> {this.props.name}</h1>
        <img src={this.props.image} alt="" />
        <p>Type: {this.props.type}</p>
      </div>
    );
  }
}

export default Pokecard;
