import React, { Component } from "react";
import GifForm from "./GifForm";
import styled from "styled-components";
import API_KEY from "./API_KEY";

const PartyDiv = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-family: monospace;
  color: white;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      searchTerm: "",
      gOTD: []
    };
    this.getGif = this.getGif.bind(this);
    this.removeGifs = this.removeGifs.bind(this);
    this.appendGif = this.appendGif.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }
  getGif(e) {
    e.preventDefault();
    fetch(
      "http://api.giphy.com/v1/gifs/search?" +
        "api_key=" +
        API_KEY +
        "&q=" +
        this.state.searchTerm
    )
      .then(res => res.json())
      .then(res => this.appendGif(res.data[0]))
      .then(this.setState({ searchTerm: "" }));
  }
  appendGif(newGif) {
    this.setState({ gifs: [...this.state.gifs, newGif] });
  }

  appendGifOTD(gOTD) {
    this.setState({ gOTD: [gOTD] });
  }

  removeGifs() {
    this.setState({ gifs: [] });
  }
  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }
  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/random?api_key=" + API_KEY)
      .then(res => res.json())
      .then(res => this.appendGifOTD(res.data));
  }
  render() {
    let gifOTD = this.state.gOTD.map(gif => {
      return (
        <img
          src={gif.image_original_url}
          id={gif.id}
          key={gif.id}
          alt={gif.caption}
        />
      );
    });
    let gifs = this.state.gifs.map(gif => {
      return (
        <img
          src={gif.images.fixed_height.url}
          id={gif.id}
          key={gif.id}
          alt={gif.title}
        />
      );
    });
    return (
      <PartyDiv>
        <h1>GIPHY PARTY</h1>
        <p>GOTD!</p>
        <div>{gifOTD}</div>

        <GifForm
          getGif={this.getGif}
          removeGifs={this.removeGifs}
          searchTerm={this.updateSearchTerm}
          value={this.state.searchTerm}
        />
        <div>{gifs}</div>
      </PartyDiv>
    );
  }
}

export default App;
