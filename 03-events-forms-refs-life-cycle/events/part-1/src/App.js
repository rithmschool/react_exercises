import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      linksDisabled: false,
    }

  }
  handleClick(event){
    if (this.state.linksDisabled){
      event.preventDefault();
    }
  }

  handleDisableButton(){
    this.setState({linksDisabled: !this.state.linksDisabled});
  }


  render() {
    let color = this.state.linksDisabled ? 'grey': 'blue';
    let buttonText = this.state.linksDisabled ? 'enable links' : 'disable links';
    let links = [{key: 1, link: 'https://vimeo.com/228346788', text: "musical robots"}, {key: 2, link: 'http://www.thisiscolossal.com/2013/11/the-writer-automata/', text: "240 year-old robot"}, {key: 3, link: "http://www.thisiscolossal.com/2015/05/simon-stalenhag-retro-sci-fi/", text: 'Swedish sci-fi paintings'}].map(link => {
      return <CustomLink key={link.key} color={color} link={link.link} text={link.text} handleClick={this.handleClick.bind(this)} />
    });

    return (
      <div className="App">
        <ul>
          {links}
        </ul>
        <button onClick={this.handleDisableButton.bind(this)}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
