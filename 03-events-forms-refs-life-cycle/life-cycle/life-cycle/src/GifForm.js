import React, { Component } from "react";
class GifForm extends Component {
  //const GifForm = props => (
  render() {
    return (
      <div>
        <form onSubmit={this.props.getGif}>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.searchTerm}
            placeholder="Enter a search term"
          />
          <button type="submit">Search Giphy!</button>
        </form>
        <button onClick={this.props.removeGifs}>Remove Images</button>
      </div>
    );
  }
}
export default GifForm;
