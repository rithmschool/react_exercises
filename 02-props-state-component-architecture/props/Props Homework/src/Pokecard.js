import React, {Component} from 'react'
import './Pokecard.css'

class Pokecard extends Component {
	render(){
		return (
			<div>
				<div className="card">
				  <img className="card-img-top" src={this.props.image} alt="Pokemon image" />
				  <div className="card-body">
				    <h1 className="card-title">{this.props.name}</h1>
				    <h3 className="card-text">Type: {this.props.type}</h3>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
			</div>

		)
	}
}

export default Pokecard