import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink'

class App extends Component {
   
  constructor(props){
    super(props);

    this.state ={
      url1: "https://www.pingmylinks.com/",
      url2: "https://www.facebook.com/pingmylinks/",
      url3: "https://www.excitesubmit.com/html/contact.html",
      btn : "Disable Links"
    }

      this.handleClick = this.handleClick.bind(this);
  }
  

    handleClick() {
      if (this.state.url1 === "https://www.pingmylinks.com/"){
         this.setState({
             url1: "#",
             url2: "#",
             url3: "#",
             btn : "Enable Links"

         }
           
          )
      }else{
        this.setState({
          url1 : "https://www.pingmylinks.com/",
          url2 : "https://www.facebook.com/pingmylinks/",
          url3 : "https://www.google.com/",
          btn : "Disable Links"
        }
        )
      }
    }
    
  render() {
    return (
      <section>
          <img src="https://www.pingmylinks.com/logo.gif" alt="pingmylinks" />
          <h1>Custom Links</h1>
          <CustomLink url={this.state.url1} text="home" />
          <br/>
          <CustomLink url={this.state.url2} text="facebook" />
          <br/>
          <CustomLink url={this.state.url3} text="contact" />
          <br/>
          <button onClick={this.handleClick}>{this.state.btn}</button>
      </section>
    );
  }
}

export default App;
