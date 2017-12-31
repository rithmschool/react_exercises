import React, { Component } from 'react';
import './App.css';
import AddGifForm from './AddGifForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addGifInput : '',
      gifs : []
    }
    this.updateText = this.updateText.bind(this);
    this.addGif = this.addGif.bind(this);
    this.appendGif = this.appendGif.bind(this);
    this.clearGifs = this.clearGifs.bind(this);
  }
  updateText(e){
    this.setState({addGifInput : e.target.value});
  }

  addGif(event){
    event.preventDefault();
    fetch("http://api.giphy.com/v1/gifs/random?api_key=IjUjuW2i73DV3bAz3Rcx3cYlgWa3DTTW&tag=" + this.state.addGifInput)
      .then(response => response.json())
      .then(response => this.appendGif(response))
  }

  appendGif(gif){
    this.setState({gifs : [...this.state.gifs, gif]});
    console.log(gif);
  }

  clearGifs(){
    this.setState({gifs : []});
  }

  componentDidMount(){
    fetch("http://api.giphy.com/v1/gifs/random?api_key=IjUjuW2i73DV3bAz3Rcx3cYlgWa3DTTW")
      .then(response => response.json())
      .then(response => this.appendGif(response))
  }

  render() {
    let gifs = this.state.gifs.map((val) => {
      let data = val.data;
      return (
        <iframe 
          src={data.image_url} 
          height={data.image_height} 
          width={data.image_width} 
          id={data.id} 
          title={data.id}
          key = {data.id}/>
        )
    })
    return (
      <div className="App">
        <div className="header">
          <h1>Giphy Party</h1>
          <AddGifForm 
            value={this.state.addGifInput} 
            updateText={this.updateText} 
            addGif={this.addGif} 
            clearGifs={this.clearGifs} />
        </div>  
        { gifs }
      </div>
    );
  }
}

export default App;
