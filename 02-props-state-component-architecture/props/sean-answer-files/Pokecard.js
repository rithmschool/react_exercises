import React, { Component } from "react";
import "./Pokecard.css";

class PokeCard extends Component {
    render(){
        return(
            <section className="pokecard">
                <h4>{this.props.name}</h4>
                <img src={this.props.image}/>
                <p>Type: {this.props.type}</p>
            </section>
        )
    }
}

export default PokeCard;