import React, {Component} from 'react'
import './Pokecard.css'

class Pokecard extends Component {
	render(){
		return (
			<div>
				<div className="card">
				  <h1 className="card-title">{this.props.name}</h1>
				  <div className="card-body">
					<img className="card-img-top" src={this.props.image} alt="Pokemon image" />  
				    <h3 className="card-text">Type: {this.props.type}</h3>
				  </div>
				</div>
			</div>

		)
	}
}

export default Pokecard