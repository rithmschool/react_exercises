import React, { Component } from 'react';
import "./NewGiphyForm.css";
// import jQuery
import $ from './../node_modules/jquery/dist/jquery.js'; 

class NewGiphyForm extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAJAXCall(url) {
    var self = this;
    $.get(url).then(function(response){
      var imageUrl = response.data[0].images.fixed_width_small.url;
      self.props.handleAdd(imageUrl);
      self.setState({
        searchTerm: ''
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var baseUrl = "http://api.giphy.com/v1/gifs/search?limit=1";
    var apiKey = "dc6zaTOxFJmzC";
    var searchUrl = `${baseUrl}&q=${this.state.searchTerm}&api_key=${apiKey}`
    
    // this == NewGiphyForm
    this.handleAJAXCall(searchUrl);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="searchTerm">Search Term: </label>
        <input
          name="searchTerm"
          type="text"
          onChange={this.handleChange}
          placeholder="hilarious"
          value={this.state.searchTerm}
        />
        <span>&nbsp;</span>
        <button type="submit">
          <span>+</span>
        </button>
      </form>

    )
  }
}


export default NewGiphyForm;