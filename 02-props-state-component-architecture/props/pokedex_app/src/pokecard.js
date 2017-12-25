import React, {Component} from "react";

class Pokecard extends Component{
    render(){
    	return(
		    <div id="pCard">
		        <h3>{this.props.name}</h3>
		        <img src={this.props.image} alt={this.props.name} />
		        <h4>Type: {this.props.type} </h4>
		    </div> 
        );
    }
}
 
 export default Pokecard;