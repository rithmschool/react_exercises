import React, { Component } from 'react';

export default class Person extends Component {

  render() {
    let drinkText = this.props.age >= 21 ?
      "Have a drink!" :
      "You must be 21.";

    let hobbies = this.props.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>) 

    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {this.props.name.slice(0,6)}</li>
          <li>Age: {this.props.age}</li>
          <ul>Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{drinkText}</h3>
      </div>
    );
  }
}
