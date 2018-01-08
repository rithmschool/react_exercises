import React, { Component } from 'react';

class PokeCard extends Component{
	render()

	{
		return(
			<div>
			  <h3>{this.props.name}</h3>
 	       <img src={this.props.image} alt={this.props.name} />
 		       <h4>Type: {this.props.type} </h4>
			</div>
			);
	};
};

export default PokeCard