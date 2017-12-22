import "./Pokecard.css";
import React, {Component} from 'react';
class Pokecard extends Component {
  render() {
    const altText = `${this.props.name}, type: ${this.props.type}`;
    return(
    <div>
      <h1>{this.props.name}</h1>
      <img src={this.props.image} alt= {altText}/>
      <h3>Type: {this.props.type}</h3>
    </div>
  )
    }
}



export default Pokecard;
