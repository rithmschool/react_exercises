import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink'

class App extends Component {
   
  constructor(props){
    super(props);

    this.state ={
      url1: "https://www.google.com/",
      url2: "https://www.google.com/",
      url3: "https://www.google.com/"
    }

      this.handleClick = this.handleClick.bind(this);
  }
  

    handleClick() {
      if (this.state.url1 === "https://www.google.com/"){
         this.setState({
             url1: "#",
             url2: "#",
             url3: "#"

         }
           
          )
      }else{
        this.setState({
          url1 : "https://www.google.com/",
          url2 : "https://www.google.com/",
          url3 : "https://www.google.com/"
        }
        )
      }
    }
    
  render() {
    return (
      <div>
          <h1>Custom Link</h1>
          <CustomLink url={this.state.url1} text="google" />
          <br/>
          <CustomLink url={this.state.url2} text="google" />
          <br/>
          <CustomLink url={this.state.url3} text="google" />
          <br/>
          <button onClick={this.handleClick}>Dissable Links</button>
      </div>
    );
  }
}

export default App;
