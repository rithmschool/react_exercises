import React, { Component } from 'react';
import './App.css';
import Customlink from './Customlink'
import Button from './Button'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      disabled: false
    }
    // this.handleClick = this.handleClick.bind(this)
    // this.handleButton = this.handleButton.bind(this)
  }

  // Using arrow functions
  // handleClick= e => {
  //   if(this.state.disabled){
  //     e.preventDefault()
  //   } 
  // }

  handleClick(e){
    if(this.state.disabled){
      e.preventDefault()
    }
  }

  handleButton (){
    if(!this.state.disabled){
      this.setState({
        disabled: true
      })
    } else {
      this.setState({
        disabled: false
      })
    }
  }

  render() {
    let links = this.props.links.map(link=>(
      <Customlink
        key = {link.id}
        href = {link.href}
        text = {link.text}
        handleClick = {this.handleClick.bind(this)}
      />
    ))
    return (
      <div className="App">
        {links}
        <Button handleButton={this.handleButton.bind(this)} />
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      id: 1,
      href: "https://www.google.com",
      text: "Google"
    },
    {
      id: 2,
      href: "https://www.github.com",
      text: "Github"
    },
    {
      id: 3,
      href: "https://www.facebook.com",
      text: "Facebook"
    }  
  ]
}

export default App;
