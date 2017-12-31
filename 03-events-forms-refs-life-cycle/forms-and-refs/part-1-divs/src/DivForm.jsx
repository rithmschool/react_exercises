import React, { Component } from 'react';

class DivForm extends Component{
	onSubmit (event){
		event.preventDefault();
		this.props.handleSubmit();
	}

	render(){

		return (
			<form>
				<label htmlFor="height">Height</label>
				<input type="number" name="height" value={this.props.height} onChange={this.props.handleChange} />

				<label htmlFor="width">Width</label>
				<input type="number" name="width" value={this.props.width} onChange={this.props.handleChange} />

				<label htmlFor="color">Color</label>
				<input type="text" name="color" value={this.props.color} onChange={this.props.handleChange} />

				<button onClick={(e) => {this.onSubmit(e)}}>Create Rectangle</button>
			</form>
		)
	}
}

export default DivForm;