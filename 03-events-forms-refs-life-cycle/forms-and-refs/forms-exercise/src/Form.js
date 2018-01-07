import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
	        height: '',
	        width: '',
	        color: '',
	        userInputArr: []
	      }
    
    this.handleUserInputs = this.handleUserInputs.bind(this);
    this.createDiv = this.createDiv.bind(this);
		
	}


	handleUserInputs(e) {
      this.setState({
        [e.target.name]: e.target.value
      }
  	)}


    createDiv(e) {
    	e.preventDefault();
    	console.log(e)

    	let currUserInput = {
    		height: this.state.height,
    		width: this.state.width,
    		color: this.state.color
    	}

    	this.setState({
    		height: '',
    		width: '',
    		color: '',
    		userInputArr: [currUserInput, ...this.state.userInputArr]}, 
    		() => this.props.handleSubmit(this.state.userInputArr),
    	);
    	
    }
	 


	render() {
		return (
			<form onSubmit={this.createDiv}>
              <label>Add a div!</label>
              <input onChange={this.handleUserInputs} type='text' value={this.state.height} placeholder='height' name='height' />
              <input onChange={this.handleUserInputs} type='text' value={this.state.width} placeholder='width' name='width' />
              <input onChange={this.handleUserInputs} type='text' value={this.state.color} placeholder='color' name='color' />
              <input type='submit' value='Submit'/>
        	</form>
		)
	}	
}


export default Form;