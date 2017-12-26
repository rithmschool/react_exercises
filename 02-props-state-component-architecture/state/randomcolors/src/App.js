import React, { Component } from 'react';
import './App.css';
import Boxes from './boxes'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numbers : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    }

     setInterval(() => {
        let newArr = this.state.numbers.slice();
        let random1 = this.state.numbers[Math.floor(Math.random()*24)+1];
        let random2 = this.state.numbers[Math.floor(Math.random()*24)+1];
        newArr[random1]=random2;

        this.setState({
          numbers : newArr
        })
        }, 300);
   }
  
  render() {
    return (
      <div className="App">
        <Boxes numbers={this.state.numbers} />
      </div>
    );
  }
}


export default App;
