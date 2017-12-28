import React, {Component} from 'react'
import './Pokecard.css'

class Pokecard extends Component {
	render(){
		return (
			<div>
				<h1></h1>
				<div className="card">
				  <img className="card-img-top" src={this.props.image} alt="Pokemon image" />
				  <div className="card-body">
				    <h4 className="card-title">{this.props.name}</h4>
				    <p className="card-text">Type: {this.props.type}</p>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
			</div>

		)
	}
}

export default Pokecard