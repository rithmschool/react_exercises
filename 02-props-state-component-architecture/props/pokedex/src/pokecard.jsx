import React, {Component} from 'react';


class Pokecard extends Component{
	render(){
		return (
			<div class="card">
				<h2>{this.props.name}</h2>
				<img src={this.props.image} alt={this.props.name} />
				<h4>Type: {this.props.type}</h4>
			</div>	
			)
	}
}

export default Pokecard;