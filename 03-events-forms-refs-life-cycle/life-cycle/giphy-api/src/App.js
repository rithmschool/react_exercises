import React, { Component } from 'react';
import './App.css';
import NewGiphyForm from "./NewGiphyForm";
import Giphy from "./Giphy";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      giphys: []
    }
  }

  addGiphy(url) {
    let giphys = this.state.giphys;
    giphys.push({ url });
    this.setState({ giphys });
  }

  clear() {
    this.setState ( {giphys: []} )
  }

  render() {

    const giphys = this.state.giphys.map((item, i) => (
      <Giphy 
        key={i} 
        url={item.url}
      />
    ));

    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy Party!</h2>
        </div>
        <NewGiphyForm handleAdd={this.addGiphy.bind(this)}/>
        <div>
          <button className="clear" type="submit" onClick={this.clear.bind(this)}>
            <span>Clear</span>
          </button>
        </div>
        {giphys}
      </div>
    );
  }
}

export default App;
